export createArtifactScriptPath=./artifacts/channel/
export servicesConfigurationPath=./artifacts/
export DBTEST_PATH=./smartcontracts/testdb/src/github.com/fabcar/go/
export API_PATH=./api
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

setGlobalsForPeer0Org1() {
    export CORE_PEER_LOCALMSPID="Org1MSP"
    export CORE_PEER_TLS_ROOTCERT_FILE=$PEER0_ORG1_CA
    export CORE_PEER_MSPCONFIGPATH=${PWD}/artifacts/channel/crypto-config/peerOrganizations/org1.$DOMAIN.com/users/Admin@org1.$DOMAIN.com/msp
    # export CORE_PEER_MSPCONFIGPATH=${PWD}/artifacts/channel/crypto-config/peerOrganizations/org1.$DOMAIN.com/peers/peer0.org1.$DOMAIN.com/msp
    export CORE_PEER_ADDRESS=localhost:7051
}

setGlobalsForPeer0Org1
peer chaincode list