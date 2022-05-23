export CORE_PEER_TLS_ENABLED=$1
export ORDERER_CA=$2
export PEER0_ORG1_CA=$3
export PEER0_ORG2_CA=$4
export FABRIC_CFG_PATH=$5

export CHANNEL_NAME=$6
export DOMAIN=$7
export API_PATH=$8

# export CORE_PEER_TLS_ENABLED=true
# export ORDERER_CA=${PWD}/artifacts/channel/crypto-config/ordererOrganizations/$DOMAIN.com/orderers/orderer.$DOMAIN.com/msp/tlscacerts/tlsca.$DOMAIN.com-cert.pem
# export PEER0_ORG1_CA=${PWD}/artifacts/channel/crypto-config/peerOrganizations/org1.$DOMAIN.com/peers/peer0.org1.$DOMAIN.com/tls/ca.crt
# export PEER0_ORG2_CA=${PWD}/artifacts/channel/crypto-config/peerOrganizations/org2.$DOMAIN.com/peers/peer0.org2.$DOMAIN.com/tls/ca.crt
# export FABRIC_CFG_PATH=${PWD}/artifacts/channel/config/

# export DOMAIN=mydomain
# export CHANNEL_NAME="mychannel"
# export API_PATH=./api

# setGlobalsForOrderer(){
#     export CORE_PEER_LOCALMSPID="OrdererMSP"
#     export CORE_PEER_TLS_ROOTCERT_FILE=${PWD}/artifacts/channel/crypto-config/ordererOrganizations/mydomain.com/orderers/orderer.mydomain.com/msp/tlscacerts/tlsca.mydomain.com-cert.pem
#     export CORE_PEER_MSPCONFIGPATH=${PWD}/artifacts/channel/crypto-config/ordererOrganizations/mydomain.com/users/Admin@mydomain.com/msp 
# }

setGlobalsForPeer0Org1(){
    export CORE_PEER_LOCALMSPID="Org1MSP"
    export CORE_PEER_TLS_ROOTCERT_FILE=$PEER0_ORG1_CA
    export CORE_PEER_MSPCONFIGPATH=${PWD}/artifacts/channel/crypto-config/peerOrganizations/org1.$DOMAIN.com/users/Admin@org1.$DOMAIN.com/msp
    export CORE_PEER_ADDRESS=localhost:7051
}

setGlobalsForPeer0Org2(){
    export CORE_PEER_LOCALMSPID="Org2MSP"
    export CORE_PEER_TLS_ROOTCERT_FILE=$PEER0_ORG2_CA
    export CORE_PEER_MSPCONFIGPATH=${PWD}/artifacts/channel/crypto-config/peerOrganizations/org2.$DOMAIN.com/users/Admin@org2.$DOMAIN.com/msp
    export CORE_PEER_ADDRESS=localhost:9051
    
}

createChannel(){
    rm -rf ./channel-artifacts/*
    setGlobalsForPeer0Org1
    
    peer channel create -o localhost:7050 -c $CHANNEL_NAME \
    --ordererTLSHostnameOverride orderer.$DOMAIN.com \
    -f ./artifacts/channel/${CHANNEL_NAME}.tx --outputBlock ./channel-artifacts/${CHANNEL_NAME}.block \
    --tls $CORE_PEER_TLS_ENABLED --cafile $ORDERER_CA
}

removeOldCrypto(){
    rm -rf $API_PATH/crypto/*
    rm -rf $API_PATH/fabric-client-kv-org1/*
    rm -rf $API_PATH/org1-wallet/*
    rm -rf $API_PATH/org2-wallet/*
}


joinChannel(){
    setGlobalsForPeer0Org1
    peer channel join -b ./channel-artifacts/$CHANNEL_NAME.block
    
    # setGlobalsForPeer1Org1
    # peer channel join -b ./channel-artifacts/$CHANNEL_NAME.block
    
    setGlobalsForPeer0Org2
    peer channel join -b ./channel-artifacts/$CHANNEL_NAME.block
    
    # setGlobalsForPeer1Org2
    # peer channel join -b ./channel-artifacts/$CHANNEL_NAME.block
    
}

updateAnchorPeers(){
    setGlobalsForPeer0Org1
    peer channel update -o localhost:7050 --ordererTLSHostnameOverride orderer.$DOMAIN.com -c $CHANNEL_NAME -f ./artifacts/channel/${CORE_PEER_LOCALMSPID}anchors.tx --tls $CORE_PEER_TLS_ENABLED --cafile $ORDERER_CA
    
    setGlobalsForPeer0Org2
    peer channel update -o localhost:7050 --ordererTLSHostnameOverride orderer.$DOMAIN.com -c $CHANNEL_NAME -f ./artifacts/channel/${CORE_PEER_LOCALMSPID}anchors.tx --tls $CORE_PEER_TLS_ENABLED --cafile $ORDERER_CA
    
}

removeOldCrypto
createChannel
sleep 5
joinChannel
sleep 5
updateAnchorPeers