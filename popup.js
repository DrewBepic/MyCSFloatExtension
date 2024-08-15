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
        FinalOutput = FinalOutput + "Number of Valid Recoil Resticted MW skins: " + ValidRecoilRestrictedMWcount + "\n";



    } catch (error) {
        document.getElementById('output').textContent = 'Error fetching data: ' + error;
    }
    document.getElementById('output').textContent = FinalOutput;
});

async function BaseOrPrice(url, FloatMatters) {
    try {
        const response = await fetch(url);
        const data = await response.json();
        var base = parseFloat(data[0].reference.base_price);
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