#Variables definitions
export createArtifactScriptPath=./artifacts/channel/
export servicesConfigurationPath=./artifacts/
export DBTEST_PATH=./smartcontracts/testdb/src/github.com/fabcar/go/
export SC_INSTITUTIONAL_PATH=./smartcontracts/institutional/src/github.com
export API_PATH=./ApiBlockChain
#Definition of variables of process
export DOMAIN=mydomain
export CHANNEL_NAME="mychannel"
export NETWORK_NAME="test"
# #Configuration folder and certificates for organizations
export CORE_PEER_TLS_ENABLED=true
export ORDERER_CA=${PWD}/artifacts/channel/crypto-config/ordererOrganizations/$DOMAIN.com/orderers/orderer.$DOMAIN.com/msp/tlscacerts/tlsca.$DOMAIN.com-cert.pem
export PEER0_ORG1_CA=${PWD}/artifacts/channel/crypto-config/peerOrganizations/org1.$DOMAIN.com/peers/peer0.org1.$DOMAIN.com/tls/ca.crt
export PEER0_ORG2_CA=${PWD}/artifacts/channel/crypto-config/peerOrganizations/org2.$DOMAIN.com/peers/peer0.org2.$DOMAIN.com/tls/ca.crt
export FABRIC_CFG_PATH=${PWD}/artifacts/channel/config/
export PRIVATE_DATA_CONFIG=${PWD}/artifacts/private-data/collections_config.json
#Const definitions
export recreateCryptoMaterial=""
export renewAllDockerContainers="s"
export relaunchServices="s"
export createChannel="s"
#function definitions
showMessage(){
    echo "###############################################################"
    echo "###### $1"
    echo "###############################################################"
}
killDockerProcesses(){
    showMessage "Killing docker processes"
    docker kill $(docker ps -q)
}
renewDockerMaterials(){
    killDockerProcesses
    showMessage "Prune Docker Images"
    docker image prune -a -f
    showMessage "Prune Docker Volumes"
    docker volume prune -f
    showMessage "Prune Docker System"
    docker system prune -f
    docker system prune -a
    docker network prune -f
    showMessage "Docker prune finished"
}
relaunchDockerServices(){
    showMessage "Lanching Initial Services"
    pushd $servicesConfigurationPath
    killDockerProcesses
    docker-compose up -d
    popd
}
recreateCryptoMaterials(){
    showMessage "Generating the crypto artifacts needed"
    pushd $createArtifactScriptPath
    ./create-artifacts.sh $CHANNEL_NAME
    popd
}
createChannel(){
    showMessage "Creating Channel"
    ./createChannel.sh $CORE_PEER_TLS_ENABLED $ORDERER_CA $PEER0_ORG1_CA $PEER0_ORG2_CA $FABRIC_CFG_PATH $CHANNEL_NAME $DOMAIN $API_PATH
}
createTestDataBaseSmartContract(){
    showMessage "Creating Smart Contract for Test DB"
    pushd $DBTEST_PATH
    go mod tidy
    go mod vendor
    popd
    showMessage "Desplegando el SmartContract"
    ./deployChaincode.sh $CORE_PEER_TLS_ENABLED $ORDERER_CA $PEER0_ORG1_CA $PEER0_ORG2_CA $FABRIC_CFG_PATH $CHANNEL_NAME $DOMAIN $API_PATH $PRIVATE_DATA_CONFIG $DBTEST_PATH
    showMessage "Inicializando Configuracion de la API"
    pushd $API_PATH/config
    ./generate-ccp.sh
    popd
}
deployInstitutionalChaincode(){
    showMessage "Creating Smart Contract for Institutional"
    showMessage "Desplegando el SmartContract"
    ./deployInstitutionalChaincodes.sh $CORE_PEER_TLS_ENABLED $ORDERER_CA $PEER0_ORG1_CA $PEER0_ORG2_CA $FABRIC_CFG_PATH $CHANNEL_NAME $DOMAIN $API_PATH $PRIVATE_DATA_CONFIG $SC_INSTITUTIONAL_PATH
    showMessage "Inicializando Configuracion de la API"
    pushd $API_PATH/config
    ./generate-ccp.sh
    popd
}
#Script execution
echo "Quieres Volver a crear los crypto materials (s/n)?"
read recreateCryptoMaterial

if [ "${recreateCryptoMaterial,,}" != "s" ]; then
echo "Quieres borrar toda la informacion de los contenedores de docker para instanciar una blockchain totalmente nueva (s/n)?"
read renewAllDockerContainers
fi
if [ "${recreateCryptoMaterial,,}" != "s" ] && [ "${renewAllDockerContainers,,}" != "s" ]; then
echo "Quieres relanzar los servicios de Docker (s/n)?"
read relaunchServices
fi
#Recreate cryptomaterials
if [ "${recreateCryptoMaterial,,}" = "s" ]; then
recreateCryptoMaterials
fi
#Renew all docker containers
if [ "${renewAllDockerContainers,,}" = "s" ]; then
renewDockerMaterials
fi
#Relaunch services
if [ "${relaunchServices,,}" = "s" ] || [ "${renewAllDockerContainers,,}" = "s" ]; then
relaunchDockerServices
fi
sleep 5
createChannel
sleep 5
deployInstitutionalChaincode