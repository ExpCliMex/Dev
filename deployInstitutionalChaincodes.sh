export CORE_PEER_TLS_ENABLED=$1
export ORDERER_CA=$2
export PEER0_ORG1_CA=$3
export PEER0_ORG2_CA=$4
export FABRIC_CFG_PATH=$5

export CHANNEL_NAME=$6
export DOMAIN=$7
export API_PATH=$8

export PRIVATE_DATA_CONFIG=$9

export SC_INSTITUTIONAL_PATH=${10}

setGlobalsForPeer0Org1() {
    export CORE_PEER_LOCALMSPID="Org1MSP"
    export CORE_PEER_TLS_ROOTCERT_FILE=$PEER0_ORG1_CA
    export CORE_PEER_MSPCONFIGPATH=${PWD}/artifacts/channel/crypto-config/peerOrganizations/org1.$DOMAIN.com/users/Admin@org1.$DOMAIN.com/msp
    # export CORE_PEER_MSPCONFIGPATH=${PWD}/artifacts/channel/crypto-config/peerOrganizations/org1.$DOMAIN.com/peers/peer0.org1.$DOMAIN.com/msp
    export CORE_PEER_ADDRESS=localhost:7051
}

setGlobalsForPeer0Org2() {
    export CORE_PEER_LOCALMSPID="Org2MSP"
    export CORE_PEER_TLS_ROOTCERT_FILE=$PEER0_ORG2_CA
    export CORE_PEER_MSPCONFIGPATH=${PWD}/artifacts/channel/crypto-config/peerOrganizations/org2.$DOMAIN.com/users/Admin@org2.$DOMAIN.com/msp
    export CORE_PEER_ADDRESS=localhost:9051

}

packageChaincode() {
    rm -rf ${1}.tar.gz
    setGlobalsForPeer0Org1
    peer lifecycle chaincode package ${1}.tar.gz \
        --path ${2} --lang ${3} \
        --label ${1}_${4}
    echo "===================== Chaincode is packaged on peer0.org1 ===================== "
}

installChaincode() {
    setGlobalsForPeer0Org1
    peer lifecycle chaincode install ${1}.tar.gz
    echo "===================== Chaincode is installed on peer0.org1 ===================== "

    setGlobalsForPeer0Org2
    peer lifecycle chaincode install ${1}.tar.gz
    echo "===================== Chaincode is installed on peer0.org2 ===================== "
}
export PACKAGE_ID=""
queryInstalled() {
    setGlobalsForPeer0Org1
    peer lifecycle chaincode queryinstalled >&log.txt
    cat log.txt
    PACKAGE_ID=$(sed -n "/${1}_${2}/{s/^Package ID: //; s/, Label:.*$//; p;}" log.txt)
    echo PackageID is ${PACKAGE_ID}
    echo "===================== Query installed successful on peer0.org1 on channel ===================== "
}

approveForMyOrg1() {
    setGlobalsForPeer0Org1
    # set -x
    peer lifecycle chaincode approveformyorg -o localhost:7050 \
        --ordererTLSHostnameOverride orderer.$1.com --tls $2 \
        --cafile $3 --channelID $4 --name ${5} --version ${6} \
        --collections-config $7 \
        --init-required --package-id ${8} \
        --sequence ${6}
    # set +x
    echo "===================== chaincode approved from org 1 ===================== "
}

approveForMyOrg2() {
    setGlobalsForPeer0Org2

    peer lifecycle chaincode approveformyorg -o localhost:7050 \
        --ordererTLSHostnameOverride orderer.$1.com --tls $2 \
        --cafile $3 --channelID $4 --name ${5} --version ${6} \
        --collections-config $7 \
        --init-required --package-id ${8} \
        --sequence ${6}

    echo "===================== chaincode approved from org 2 ===================== "
}

checkCommitReadyness() {
    setGlobalsForPeer0Org1
    peer lifecycle chaincode checkcommitreadiness \
        --collections-config $1 \
        --channelID $2 --name $3 --version $4 \
        --sequence $4 --output json --init-required
    echo "===================== checking commit readyness from org 1 ===================== "
}

commitChaincodeDefinition() {
    setGlobalsForPeer0Org1
    peer lifecycle chaincode commit -o localhost:7050 --ordererTLSHostnameOverride orderer.$1.com \
        --tls $2 --cafile $3 \
        --channelID $4 --name $5 \
        --collections-config $6 \
        --peerAddresses localhost:7051 --tlsRootCertFiles $7 \
        --peerAddresses localhost:9051 --tlsRootCertFiles $8 \
        --version $9 --sequence $9 --init-required

}

queryCommitted() {
    setGlobalsForPeer0Org1
    peer lifecycle chaincode querycommitted --channelID $1 --name ${2}
}

chaincodeInvokeInit() {
    setGlobalsForPeer0Org1
    peer chaincode invoke -o localhost:7050 \
        --ordererTLSHostnameOverride orderer.$1.com \
        --tls $2 --cafile $3 \
        -C $4 -n $5 \
        --peerAddresses localhost:7051 --tlsRootCertFiles $6 \
        --peerAddresses localhost:9051 --tlsRootCertFiles $7 \
        --isInit -c '{"Args":[]}'

}

chaincodeInvoke() {
    setGlobalsForPeer0Org1

    peer chaincode invoke -o localhost:7050 \
        --ordererTLSHostnameOverride orderer.$1.com \
        --tls $2 \
        --cafile $3 \
        -C $4 -n $5 \
        --peerAddresses localhost:7051 \
        --tlsRootCertFiles $6 \
        --peerAddresses localhost:9051 \
        --tlsRootCertFiles $7 \
        -c '{"function": "institutional_user:initLedger","Args":[]}'

    peer chaincode invoke -o localhost:7050 \
        --ordererTLSHostnameOverride orderer.$1.com \
        --tls $2 \
        --cafile $3 \
        -C $4 -n $5 \
        --peerAddresses localhost:7051 \
        --tlsRootCertFiles $6 \
        --peerAddresses localhost:9051 \
        --tlsRootCertFiles $7 \
        -c '{"function": "institutional_staff:initLedger","Args":[]}'

    peer chaincode invoke -o localhost:7050 \
        --ordererTLSHostnameOverride orderer.$1.com \
        --tls $2 \
        --cafile $3 \
        -C $4 -n $5 \
        --peerAddresses localhost:7051 \
        --tlsRootCertFiles $6 \
        --peerAddresses localhost:9051 \
        --tlsRootCertFiles $7 \
        -c '{"function": "institutional_institution:initLedger","Args":[]}'

    peer chaincode invoke -o localhost:7050 \
        --ordererTLSHostnameOverride orderer.$1.com \
        --tls $2 \
        --cafile $3 \
        -C $4 -n $5 \
        --peerAddresses localhost:7051 \
        --tlsRootCertFiles $6 \
        --peerAddresses localhost:9051 \
        --tlsRootCertFiles $7 \
        -c '{"function": "institutional_ConstantsOptions:initLedger","Args":[]}'

    peer chaincode invoke -o localhost:7050 \
        --ordererTLSHostnameOverride orderer.$1.com \
        --tls $2 \
        --cafile $3 \
        -C $4 -n $5 \
        --peerAddresses localhost:7051 \
        --tlsRootCertFiles $6 \
        --peerAddresses localhost:9051 \
        --tlsRootCertFiles $7 \
        -c '{"function": "institutional_Patient:initLedger","Args":[]}'
}

chaincodeQuery() {
    setGlobalsForPeer0Org2
    peer chaincode query -C $1 -n $2 -c '{"function": "institutional_user:readUser","Args":["{ \"id\": \"User1\" }"]}'
    peer chaincode query -C $1 -n $2 -c '{"function": "institutional_staff:readStaff","Args":["{ \"id\": \"Staff1\" }"]}'
    peer chaincode query -C $1 -n $2 -c '{"function": "institutional_institution:readInstitution","Args":["{ \"id\": \"Institution1\" }"]}'
    peer chaincode query -C $1 -n $2 -c '{"function": "institutional_ConstantsOptions:readAllConstantOption","Args":[]}'
}

deployInstitutionalChaincode(){
    #Deploy Institutional-User
    CC_RUNTIME_LANGUAGE="node"
    VERSION="1"
    CC_SRC_PATH=$SC_INSTITUTIONAL_PATH
    CC_NAME="Institutional_User"
    #presetup
    echo Vendoring dependencies ...
    pushd $CC_SRC_PATH
    npm install
    popd
    echo Finished vendoring dependencies
    #deploy
    packageChaincode $CC_NAME $CC_SRC_PATH $CC_RUNTIME_LANGUAGE $VERSION
    installChaincode $CC_NAME
    queryInstalled $CC_NAME $VERSION
    #PACKAGE_ID=$?
    approveForMyOrg1 $DOMAIN $CORE_PEER_TLS_ENABLED $ORDERER_CA $CHANNEL_NAME $CC_NAME $VERSION $PRIVATE_DATA_CONFIG $PACKAGE_ID
    approveForMyOrg2 $DOMAIN $CORE_PEER_TLS_ENABLED $ORDERER_CA $CHANNEL_NAME $CC_NAME $VERSION $PRIVATE_DATA_CONFIG $PACKAGE_ID
    checkCommitReadyness $PRIVATE_DATA_CONFIG $CHANNEL_NAME $CC_NAME $VERSION
    commitChaincodeDefinition $DOMAIN $CORE_PEER_TLS_ENABLED $ORDERER_CA $CHANNEL_NAME $CC_NAME $PRIVATE_DATA_CONFIG $PEER0_ORG1_CA $PEER0_ORG2_CA $VERSION
    queryCommitted $CHANNEL_NAME $CC_NAME
    chaincodeInvokeInit $DOMAIN $CORE_PEER_TLS_ENABLED $ORDERER_CA $CHANNEL_NAME $CC_NAME $PEER0_ORG1_CA $PEER0_ORG2_CA
    sleep 5
    chaincodeInvoke $DOMAIN $CORE_PEER_TLS_ENABLED $ORDERER_CA $CHANNEL_NAME $CC_NAME $PEER0_ORG1_CA $PEER0_ORG2_CA
    sleep 5
    callInstruction='{"function": "existsUser","Args":["admin"]}'
    chaincodeQuery $CHANNEL_NAME $CC_NAME $callInstruction
}

deployInstitutionalChaincode
