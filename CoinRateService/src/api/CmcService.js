/**
 * API key of cmc.
 * There is limit of call api a day. So, if more call need, change key 1 to 2 or 2 to 1.
 * If you need more, see https://coinmarketcap.com/.
 */
const X_CMC_PRO_API_KEY = '874a5427-138c-4c43-9a5b-b03d97f79b62';
const X_CMC_PRO_API_KEY2 = '03ad9eba-7b75-4b35-ab25-d2a1c0e5ed02';

/**
 * This API gets coins data of coin market. 
 * header needs API key, Accept-Encoding helps get api fast.
 * This get limit 100 coins by KRW.
 * If you want detail, see https://coinmarketcap.com/.
 * Or if you want sample, see '../model/SampleData.json'.
 */
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
        /** this is json to string code */
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

    return cmcData;
};


  