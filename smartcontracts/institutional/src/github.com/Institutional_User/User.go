package main

import (
	"encoding/json"
	"fmt"

	"github.com/hyperledger/fabric-chaincode-go/shim"
	"github.com/hyperledger/fabric-protos-go/ledger/queryresult"
	sc "github.com/hyperledger/fabric-protos-go/peer"
	"github.com/hyperledger/fabric/common/flogging"
)

// SmartContract Define the Smart Contract structure
type SmartContract struct {
}

// Car :  Define the car structure, with 4 properties.  Structure tags are used by encoding/json library
type User struct {
	Username   string `json:"username"`
	Name  string `json:"name"`
	Lastname string `json:"lastname"`
	Email  string `json:"email"`
	Password  string `json:"password"`
	Role string `json:"role"`
}

// Init ;  Method for initializing smart contract
func (s *SmartContract) Init(APIstub shim.ChaincodeStubInterface) sc.Response {
	return shim.Success(nil)
}

var logger = flogging.MustGetLogger("institutional_user_cc")

// Invoke :  Method for INVOKING smart contract
func (s *SmartContract) Invoke(APIstub shim.ChaincodeStubInterface) sc.Response {

	function, args := APIstub.GetFunctionAndParameters()
	logger.Infof("Function name is:  %d", function)
	logger.Infof("Args length is : %d", len(args))

	switch function {
	case "initLedger":
		return s.initLedger(APIstub)
	case "createUser":
		return s.createUser(APIstub, args)
	case "existsUser":
		return s.existsUser(APIstub, args)
	// case "updateUser":
	// 	return s.updateUser(APIstub, args)
	case "deleteUser":
		return s.deleteUser(APIstub, args)
	case "queryUsers":
	 	return s.queryUsers(APIstub, args)
	default:
		return shim.Error("Invalid Smart Contract function name.")
	}

	// return shim.Error("Invalid Smart Contract function name.")
}

func (s *SmartContract) initLedger(APIstub shim.ChaincodeStubInterface) sc.Response {
	users := []User{
		User{Username: "root", Name: "root", Lastname: "", Email: "email@example.com", Password: "admin123", Role: "admin"},
		User{Username: "admin", Name: "admin", Lastname: "", Email: "email@example.com", Password: "admin123", Role: "admin"},
	}

	i := 0
	for i < len(users) {
		carAsBytes, _ := json.Marshal(users[i])
		APIstub.PutState(users[i].Username, carAsBytes)
		i = i + 1
	}

	return shim.Success(nil)
}


func (s *SmartContract) createUser(APIstub shim.ChaincodeStubInterface, args []string) sc.Response {

	if len(args) != 6 {
		return shim.Error("Incorrect number of arguments. Expecting 6")
	}

	var user = User{Username: args[0], Name: args[1], Lastname: args[2], Email: args[3], Password: args[4], Role: args[5]}

	userAsBytes, _ := json.Marshal(user)
	err := APIstub.PutState(args[0], userAsBytes)

	if err != nil {
		return shim.Error(err.Error())
	}

	user.Password = ""
	userAsBytesWithOutPassword, _ := json.Marshal(user)

	return shim.Success(userAsBytesWithOutPassword)
}

func (s *SmartContract) existsUser(APIstub shim.ChaincodeStubInterface, args []string) sc.Response {

	if len(args) != 1 {
		return shim.Error("Incorrect number of arguments. Expecting 1")
	}
	
	carAsBytes, err := APIstub.GetState(args[0])

	if err != nil {
		return shim.Error(err.Error())
	}

	return shim.Success(carAsBytes)
}

func (s *SmartContract) queryUsers(APIstub shim.ChaincodeStubInterface, args []string) sc.Response {

	if len(args) != 1 {
		return shim.Error("Incorrect number of arguments. Expecting 1")
	}
	//query := "{\"username\":\"admin\",\"password\":\"admin123\"}"
	query := args[0]
	iterator , err := APIstub.GetQueryResult(query)
	
	result := []queryresult.KV{}

	for iterator.HasNext() {
		user, _ := iterator.Next()
		result = append(result, *user)
	}

	if err != nil {
		return shim.Error(err.Error())
	}

	resultAsBytes , _ := json.Marshal(result)

	return shim.Success(resultAsBytes)
}

func (s *SmartContract) deleteUser(APIstub shim.ChaincodeStubInterface, args []string) sc.Response {

	if len(args) != 1 {
		return shim.Error("Incorrect number of arguments. Expecting 1")
	}

	err := APIstub.DelState(args[0])
	
	if err != nil {
		return shim.Error(err.Error())
	}

	return shim.Success(nil)
}

// The main function is only relevant in unit test mode. 
// Only included here for completeness.
func main() {
	// Create a new Smart Contract
	err := shim.Start(new(SmartContract))
	if err != nil {
		fmt.Printf("Error creating new Smart Contract: %s", err)
	}
}
