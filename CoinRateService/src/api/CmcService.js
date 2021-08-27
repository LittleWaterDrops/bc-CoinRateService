
const X_CMC_PRO_API_KEY = '874a5427-138c-4c43-9a5b-b03d97f79b62';
const X_CMC_PRO_API_KEY2 = '03ad9eba-7b75-4b35-ab25-d2a1c0e5ed02';

export default CmcService = async () => {
    var cmcData;

    getCMCData = async () => {
        try {
            const response = await fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?limit=100&convert=KRW',{
                method: 'GET',
                headers:{
                'X-CMC_PRO_API_KEY': X_CMC_PRO_API_KEY2,
                Accept: 'application/json',
                'Accept-Encoding': 'deflate, gzip',
                },
            });
        const json = await response.json();
        // this is json to string code
        // const cmcInfo = CmcModel.cmcInfoToJson(json);
        // console.log(cmcInfo);
        // console.log(JSON.stringify(json));
        cmcData = json;
        } catch (error) {
        console.error(error);
        cmcData = null;
        }
    }
    await getCMCData();

    // console.log(cmcData);
    return cmcData;
};


  