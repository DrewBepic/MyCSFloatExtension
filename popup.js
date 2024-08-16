var requestsNum = 0;
document.getElementById('fetchButton').addEventListener('click', async () => {
    var RecoilOutputLinks = [
        'https://csfloat.com/api/v1/listings?limit=1&category=1&sort_by=lowest_price&max_float=0.07&collection=set_community_31&type=buy_now&def_index=36&paint_index=1153',
        'https://csfloat.com/api/v1/listings?limit=1&category=1&sort_by=lowest_price&max_float=0.07&collection=set_community_31&type=buy_now&def_index=7&paint_index=1143',
        'https://csfloat.com/api/v1/listings?limit=1&category=1&sort_by=lowest_price&min_float=0.07&max_float=0.1&collection=set_community_31&type=buy_now&def_index=29&paint_index=1155'
    ];
    var RecoilOutputs = [
        "P250 | Visions (Factory New)",
        "AK-47 | Ice Coaled (Factory New)",
        "Sawed-Off | Kiss♥Love (Minimal Wear)"
    ];
    var ALLRecoilClassifiedFNLink = 'https://csfloat.com/api/v1/listings?limit=50&category=1&rarity=5&sort_by=lowest_price&max_float=0.07&collection=set_community_31&type=buy_now';
    var RecoilRestrictedMWLink = 'https://csfloat.com/api/v1/listings?limit=8&rarity=4&sort_by=lowest_price&min_float=0.07&max_float=0.097&collection=set_community_31&type=buy_now';

    var DreamsAndNightmaresRestrictedFNBasePrice = 111;
    var DreamsAndNightmaresOutputLinks = [
        'https://csfloat.com/api/v1/listings?limit=1&category=1&sort_by=lowest_price&max_float=0.07&collection=set_community_30&type=buy_now&def_index=33&paint_index=1133',
        'https://csfloat.com/api/v1/listings?limit=1&category=1&sort_by=lowest_price&max_float=0.07&collection=set_community_30&type=buy_now&def_index=2&paint_index=1126',
        'https://csfloat.com/api/v1/listings?limit=1&category=1&sort_by=lowest_price&max_float=0.07&collection=set_community_30&type=buy_now&def_index=10&paint_index=1127'
    ];
    
    var DreamsAndNightmaresOutputs = [
        "MP7 | Abyssal Apparition (Factory New)",
        "Dual Berettas | Melondrama (Factory New)",
        "FAMAS | Rapid Eye Movement (Factory New)"
    ];
    var ALLDreamsAndNightmaresClassifiedFNLink = 'https://csfloat.com/api/v1/listings?limit=50&category=1&rarity=5&sort_by=lowest_price&max_float=0.07&collection=set_community_30&type=buy_now';
    var DreamsAndNightmaresRestrictedFNLink = 'https://csfloat.com/api/v1/listings?limit=8&category=1&rarity=4&sort_by=lowest_price&max_float=0.03&collection=set_community_30&min_price=80&type=buy_now';


    var FinalOutput = "";
    try {
        const BaseOrPriceRecoilALL = await BaseOrPrice2(ALLRecoilClassifiedFNLink,RecoilOutputs,RecoilOutputLinks);
        var BuyRecoilRestrictedsFor = BaseOrPriceRecoilALL/11.3;
        const ValidRecoilRestrictedMWcount = await Valids(RecoilRestrictedMWLink, BuyRecoilRestrictedsFor);
        FinalOutput = FinalOutput + "Recoil Resticted MW price: " + BuyRecoilRestrictedsFor/100 + "\n";
        FinalOutput = FinalOutput + "Recoil Resticted MW skins: " + ValidRecoilRestrictedMWcount + "\n";
        
        const BaseOrPriceDASALL = await BaseOrPrice2(ALLDreamsAndNightmaresClassifiedFNLink, DreamsAndNightmaresOutputs, DreamsAndNightmaresOutputLinks);
        FinalOutput = FinalOutput + "Dreams and Nightmares Restricted FN price: " + DreamsAndNightmaresRestrictedFNBasePrice/100 + "\n";

        const ValidDASRestrictedFNcount = await Valids(DreamsAndNightmaresRestrictedFNLink, DreamsAndNightmaresRestrictedFNBasePrice);
        FinalOutput = FinalOutput + "Dreams and Nightmares Restricted FN skins: " + ValidDASRestrictedFNcount + "\n";

    } catch (error) {
        document.getElementById('output').textContent = 'Error fetching data: ' + error;
    }
    FinalOutput = "Requests: " + requestsNum + "\n" + FinalOutput;
    document.getElementById('output').textContent = FinalOutput;
});

async function BaseOrPrice(url, FloatMatters) { //Returns the smaller number between base and price for 1 skin.
    try {
        const response = await fetch(url);
        requestsNum++;
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

async function BaseOrPrice2(ALLurl, names, urls){ //Returns the average for all BaseOrPrices for a collection.
    try {
        const response = await fetch(ALLurl);
        requestsNum++;
        const data = await response.json();
        let average = 0;
        var IfRegister = [1,1,1];
        var c = 0;
        for (let skin of names) {
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
            average += await BaseOrPrice(urls[0], 1);
        }
        if(IfRegister[1] == 1){
            average += await BaseOrPrice(urls[1], 1);
        }
        if(IfRegister[2] == 1){
            average += await BaseOrPrice(urls[2], 1);
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
        requestsNum++;
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
