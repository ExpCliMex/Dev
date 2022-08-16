function validateTransactionConfig(transConfig,isAdminCall){
    try{
        if((!transConfig.channelName 
            || !transConfig.chaincodeName
            || !transConfig.fcn
            || !transConfig.org_name) && isAdminCall)
            return false;
        if((!transConfig.channelName 
            || !transConfig.chaincodeName
            || !transConfig.fcn
            || !transConfig.org_name
            || !transConfig.username) && !isAdminCall)
            return false;
        return true;
    }catch(ex){
        return ex.message;
    }
}

module.exports = {
    validateTransactionConfig : validateTransactionConfig
}