document.getElementById('fetchButton').addEventListener('click', async () => {
    var VisionsFNLink = 'https://csfloat.com/api/v1/listings?limit=1&category=1&sort_by=lowest_price&max_float=0.07&collection=set_community_31&type=buy_now&def_index=36&paint_index=1153';
    var IceCoaledFNLink = 'https://csfloat.com/api/v1/listings?limit=1&category=1&sort_by=lowest_price&max_float=0.07&collection=set_community_31&type=buy_now&def_index=7&paint_index=1143';
    var KissLoveMWGoodFloatLink = 'https://csfloat.com/api/v1/listings?limit=1&category=1&sort_by=lowest_price&min_float=0.07&max_float=0.1&collection=set_community_31&type=buy_now&def_index=29&paint_index=1155';
    var DreamsAndNightmaresRestrictedFNBasePrice = 111;
    var AbyssalApparitionFNLink = 'https://csfloat.com/api/v1/listings?limit=1&category=1&sort_by=lowest_price&max_float=0.07&collection=set_community_30&type=buy_now&def_index=33&paint_index=1133';
    var MelondramaFNLink = 'https://csfloat.com/api/v1/listings?limit=1&category=1&sort_by=lowest_price&max_float=0.07&collection=set_community_30&type=buy_now&def_index=2&paint_index=1126';
    var RapidEyeMovementFNLink = 'https://csfloat.com/api/v1/listings?limit=1&category=1&sort_by=lowest_price&max_float=0.07&collection=set_community_30&type=buy_now&def_index=10&paint_index=1127';
    var ALLDreamsAndNightmaresClassifiedFNLink = 'https://csfloat.com/api/v1/listings?limit=50&category=1&rarity=5&sort_by=lowest_price&max_float=0.07&collection=set_community_30&type=buy_now';
    var AbyssalApparitionFN = "MP7 | Abyssal Apparition (Factory New)";
    var MelondramaFN = "Dual Berettas | Melondrama (Factory New)";
    var RapidEyeMovementFN = "FAMAS | Rapid Eye Movement (Factory New)";


    var FinalOutput = "";
    try {
        const baseOrPriceVisions = await BaseOrPrice(VisionsFNLink, 0);
        const baseOrPriceIceCoaled = await BaseOrPrice(IceCoaledFNLink, 0);
        const baseOrPriceKissLoveMWGoodFloat = await BaseOrPrice(KissLoveMWGoodFloatLink, 1);
        
        var RecoilClassifiedFNAVG = (baseOrPriceVisions + baseOrPriceIceCoaled + baseOrPriceKissLoveMWGoodFloat) / 3;
        var BuyRecoilRestrictedsFor = RecoilClassifiedFNAVG/11.3;
        var RecoilRestrictedMWURL = 'https://csfloat.com/api/v1/listings?limit=8&rarity=4&sort_by=lowest_price&min_float=0.07&max_float=0.097&collection=set_community_31&type=buy_now';
        const ValidRecoilRestrictedMWcount = await Valids(RecoilRestrictedMWURL, BuyRecoilRestrictedsFor);
        FinalOutput = FinalOutput + "Average classified Recoil price: " + RecoilClassifiedFNAVG + "\n" + "Number of Valid Recoil Resticted MW skins: " + ValidRecoilRestrictedMWcount + "\n";

        const BaseOrPriceDASALL = await BaseOrPrice2(ALLDreamsAndNightmaresClassifiedFNLink, AbyssalApparitionFN, MelondramaFN, RapidEyeMovementFN, AbyssalApparitionFNLink, MelondramaFNLink, RapidEyeMovementFNLink)
        FinalOutput = FinalOutput + "Average classified Dreams and Nightmares price: " + BaseOrPriceDASALL + "\n";
        //document.getElementById('output').textContent = BaseOrPriceDASALL;

    } catch (error) {
        document.getElementById('output').textContent = 'Error fetching data: ' + error;
    }
    document.getElementById('output').textContent = FinalOutput;
});

async function BaseOrPrice(url, FloatMatters) { //Returns the smaller number between base and price for 1 skin.
    try {
        const response = await fetch(url);
        const data = await response.json();
        var base = parseFloat(data[0].reference.predicted_price);
        var price = parseFloat(data[0].price);
        
        if (base < price && FloatMatters == 0) {
            return base;
        } else {
            return (price - 1);
        }
    } catch (error) {
        document.getElementById('output').textContent = 'Error fetching data: ' + error;
        return 0;
    }
}

async function BaseOrPrice2(ALLurl, firstskin, secondskin, thirdskin, firstskinURL, secondskinURL, thirdskinURL){ //Returns the average for all BaseOrPrices for a collection.
    try {
        const response = await fetch(ALLurl);
        const data = await response.json();
        let average = 0;
        var skins = [firstskin, secondskin, thirdskin];
        var IfRegister = [1,1,1];
        var c = 0;
        for (let skin of skins) {
            for (let i = 0; i < data.length; i++) {
                if (data[i].item && data[i].item.market_hash_name === skin) {
                    var base = parseFloat(data[i].reference.predicted_price);
                    var price = parseFloat(data[i].price);
                    
                    if (base < price) {
                        average += base;
                    } else {
                        average += (price - 1);
                    }
                    IfRegister[c] = 0;
                    break;
                }
            }
            c += 1;
        }
            
        if(IfRegister[0] == 1){
            average += await BaseOrPrice(firstskinURL, 0);
        }
        if(IfRegister[1] == 1){
            average += await BaseOrPrice(secondskinURL, 0);
        }
        if(IfRegister[2] == 1){
            average += await BaseOrPrice(thirdskinURL, 0);
        }
        return average / 3;
        
    } catch (error) {
        document.getElementById('output').textContent = 'Error fetching data: ' + error;
        return 0;
    }
}

async function Valids(url, BuyPrice){
    try{
        const response = await fetch(url);
        const data = await response.json();
        var valids = 0;
        for(var i = 0; i < 8; i++){
            var price = parseFloat(data[i].price);
            if(price <= BuyPrice){
                valids += 1;
            }else{
                return valids;
            }
        }
        return valids;
    }catch (error) {
        document.getElementById('output').textContent = 'Error fetching data: ' + error;
        return 0;
    }
}
