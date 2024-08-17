var requestsNum = 0;
var DreamsAndNightmaresRestrictedFNBasePrice = 111;
var BuyRevolutionRestrictedsFor;
document.getElementById('fetchButton').addEventListener('click', async () => {
    //Recoil 10x MW
    var RecoilTradeUpOutputLinks = ['https://csfloat.com/api/v1/listings?limit=1&category=1&sort_by=lowest_price&max_float=0.07&collection=set_community_31&type=buy_now&def_index=36&paint_index=1153','https://csfloat.com/api/v1/listings?limit=1&category=1&sort_by=lowest_price&max_float=0.07&collection=set_community_31&type=buy_now&def_index=7&paint_index=1143','https://csfloat.com/api/v1/listings?limit=1&category=1&sort_by=lowest_price&min_float=0.07&max_float=0.1&collection=set_community_31&type=buy_now&def_index=29&paint_index=1155'];
    var RecoilTradeUpOutputs = ["P250 | Visions (Factory New)","AK-47 | Ice Coaled (Factory New)","Sawed-Off | Kiss♥Love (Minimal Wear)"];
    var ALLRecoilClassifiedFNLink = 'https://csfloat.com/api/v1/listings?limit=50&category=1&rarity=5&sort_by=lowest_price&max_float=0.07&collection=set_community_31&type=buy_now';
    var RecoilRestrictedMWLink = 'https://csfloat.com/api/v1/listings?limit=8&rarity=4&sort_by=lowest_price&min_float=0.07&max_float=0.1&collection=set_community_31&type=buy_now';

    //Dreams and Nightmares 3x FN
    var DreamsAndNightmaresOutputLinks = ['https://csfloat.com/api/v1/listings?limit=1&category=1&sort_by=lowest_price&max_float=0.07&collection=set_community_30&type=buy_now&def_index=33&paint_index=1133','https://csfloat.com/api/v1/listings?limit=1&category=1&sort_by=lowest_price&max_float=0.07&collection=set_community_30&type=buy_now&def_index=2&paint_index=1126','https://csfloat.com/api/v1/listings?limit=1&category=1&sort_by=lowest_price&max_float=0.07&collection=set_community_30&type=buy_now&def_index=10&paint_index=1127'];
    var DreamsAndNightmaresOutputs = ["MP7 | Abyssal Apparition (Factory New)","Dual Berettas | Melondrama (Factory New)","FAMAS | Rapid Eye Movement (Factory New)"];
    var ALLDreamsAndNightmaresClassifiedFNLink = 'https://csfloat.com/api/v1/listings?limit=50&category=1&rarity=5&sort_by=lowest_price&max_float=0.07&collection=set_community_30&type=buy_now';
    var DreamsAndNightmaresRestrictedFNLink = 'https://csfloat.com/api/v1/listings?limit=8&category=1&rarity=4&sort_by=lowest_price&max_float=0.03&collection=set_community_30&min_price=80&type=buy_now';

    //Revolution 7x MW
    var RevolutionOutputLinks = ['https://csfloat.com/api/v1/listings?limit=1&category=1&sort_by=lowest_price&max_float=0.07&collection=set_community_32&type=buy_now&def_index=9&paint_index=1222','https://csfloat.com/api/v1/listings?limit=1&category=1&sort_by=lowest_price&max_float=0.07&collection=set_community_32&type=buy_now&def_index=24&paint_index=1236','https://csfloat.com/api/v1/listings?limit=1&category=1&sort_by=lowest_price&max_float=0.07&collection=set_community_32&type=buy_now&def_index=32&paint_index=1224'];
    var RevolutionOutputs = ["AWP | Duality (Factory New)","UMP-45 | Wild Child (Factory New)","P2000 | Wicked Sick (Factory New)"];
    var ALLRevolutionClassifiedFNLink = 'https://csfloat.com/api/v1/listings?limit=50&category=1&rarity=5&sort_by=lowest_price&max_float=0.07&collection=set_community_32&type=buy_now';
    var RevolutionRestrictedMWLink = 'https://csfloat.com/api/v1/listings?limit=8&rarity=4&sort_by=lowest_price&min_float=0.07&max_float=0.1&collection=set_community_32&type=buy_now';

    //Horizon 7x MW
    var HorizonOutputLinks = ['https://csfloat.com/api/v1/listings?limit=1&category=1&rarity=5&sort_by=lowest_price&max_float=0.07&collection=set_community_20&type=buy_now&def_index=60&paint_index=714','https://csfloat.com/api/v1/listings?limit=1&category=1&rarity=5&sort_by=lowest_price&max_float=0.07&collection=set_community_20&type=buy_now&def_index=29&paint_index=720','https://csfloat.com/api/v1/listings?limit=1&category=1&rarity=5&sort_by=lowest_price&max_float=0.07&collection=set_community_20&type=buy_now&def_index=10&paint_index=723'];
    var HorizonOutputs = ["M4A1-S | Nightmare (Factory New)","Sawed-Off | Devourer (Factory New)","FAMAS | Eye of Athena (Factory New)"];
    var ALLHorizonClassifiedFNLink = 'https://csfloat.com/api/v1/listings?limit=50&category=1&rarity=5&sort_by=lowest_price&max_float=0.07&collection=set_community_20&type=buy_now';
    var HorizonRestrictedMWLink = 'https://csfloat.com/api/v1/listings?limit=8&category=1&rarity=4&sort_by=lowest_price&min_float=0.07&max_float=0.1&collection=set_community_20&type=buy_now';

    //Kilowatt 7x MW
    var KilowattOutputLinks = ['https://csfloat.com/api/v1/listings?limit=1&category=1&sort_by=lowest_price&max_float=0.07&collection=set_community_33&type=buy_now&def_index=31&paint_index=1172','https://csfloat.com/api/v1/listings?limit=1&category=1&sort_by=lowest_price&max_float=0.07&collection=set_community_33&type=buy_now&def_index=61&paint_index=1173','https://csfloat.com/api/v1/listings?limit=1&category=1&sort_by=lowest_price&max_float=0.07&collection=set_community_33&type=buy_now&def_index=60&paint_index=1166'];
    var KilowattOutputs = ["Zeus x27 | Olympus (Factory New)","USP-S | Jawbreaker (Factory New)","M4A1-S | Black Lotus (Factory New)"];
    var ALLKilowattClassifiedFNLink = 'https://csfloat.com/api/v1/listings?limit=50&category=1&rarity=5&sort_by=lowest_price&max_float=0.07&collection=set_community_33&type=buy_now';
    var KilowattRestrictedMWLink = 'https://csfloat.com/api/v1/listings?limit=8&category=1&rarity=4&sort_by=lowest_price&min_float=0.07&max_float=0.1&collection=set_community_33&type=buy_now';

    //TODO: Go Back to FN skins like Fracture, Recoil, Revolution, Danger Zone, Breakout

    //Recoil 3x FN
    var RecoilOutputLinks = ['https://csfloat.com/api/v1/listings?limit=1&category=1&sort_by=lowest_price&max_float=0.07&collection=set_community_31&type=buy_now&def_index=36&paint_index=1153','https://csfloat.com/api/v1/listings?limit=1&category=1&sort_by=lowest_price&max_float=0.07&collection=set_community_31&type=buy_now&def_index=7&paint_index=1143','https://csfloat.com/api/v1/listings?limit=1&sort_by=lowest_price&max_float=0.07&def_index=29&paint_index=1155'];
    var RecoilOutputs = ["P250 | Visions (Factory New)","AK-47 | Ice Coaled (Factory New)","Sawed-Off | Kiss♥Love (Factory New)"];
    //ALLRecoilClassifiedFNLink already intialised
    var RecoilRestrictedFNLink = 'https://csfloat.com/api/v1/listings?limit=8&category=1&rarity=4&sort_by=lowest_price&max_float=0.03&collection=set_community_31&type=buy_now';

    //Fracture 3x FN
    

    //Revolution 3x FN

    //Danger Zone 3x FN

    //Breakout 3x FN


    var FinalOutput = "";
    try {
        const BaseOrPriceRecoilALL = await BaseOrPrice2(ALLRecoilClassifiedFNLink,RecoilTradeUpOutputs,RecoilTradeUpOutputLinks);
        var BuyRecoilRestrictedsFor = BaseOrPriceRecoilALL/11.3;
        const ValidRecoilRestrictedMWcount = await Valids(RecoilRestrictedMWLink, BuyRecoilRestrictedsFor);
        FinalOutput = FinalOutput + "Recoil Resticted MW price: $" + Math.floor(BuyRecoilRestrictedsFor) / 100+ "\n";
        FinalOutput = FinalOutput + "Recoil Resticted MW skins: " + ValidRecoilRestrictedMWcount + "\n";
        
        const BaseOrPriceDASALL = await BaseOrPrice2(ALLDreamsAndNightmaresClassifiedFNLink, DreamsAndNightmaresOutputs, DreamsAndNightmaresOutputLinks);
        FinalOutput = FinalOutput + "Dreams and Nightmares Restricted FN price: $" + DreamsAndNightmaresRestrictedFNBasePrice/100 + "\n";

        const ValidDANRestrictedFNcount = await Valids(DreamsAndNightmaresRestrictedFNLink, DreamsAndNightmaresRestrictedFNBasePrice);
        FinalOutput = FinalOutput + "Dreams and Nightmares Restricted FN skins: " + ValidDANRestrictedFNcount + "\n";

        const BaseOrPriceRevolutionALL = await BaseOrPrice2(ALLRevolutionClassifiedFNLink,RevolutionOutputs,RevolutionOutputLinks);
        BuyRevolutionRestrictedsFor = SevenMW(BaseOrPriceDASALL, BaseOrPriceRevolutionALL);
        const ValidRevolutionRestrictedMWcount = await Valids(RevolutionRestrictedMWLink,BuyRevolutionRestrictedsFor);
        FinalOutput = FinalOutput + "Revolution Resticted MW price: $" + Math.floor(BuyRevolutionRestrictedsFor) / 100 + "\n";
        FinalOutput = FinalOutput + "Revolution Resticted MW skins: " + ValidRevolutionRestrictedMWcount + "\n";

        const BaseOrPriceHorizonALL = await BaseOrPrice2(ALLHorizonClassifiedFNLink,HorizonOutputs,HorizonOutputLinks);
        var BuyHorizonRestrictedsFor = SevenMW(BaseOrPriceDASALL, BaseOrPriceHorizonALL);
        const ValidHorizonRestrictedMWcount = await Valids(HorizonRestrictedMWLink,BuyHorizonRestrictedsFor);
        FinalOutput = FinalOutput + "Horizon Resticted MW price: $" + Math.floor(BuyHorizonRestrictedsFor) / 100 + "\n";
        FinalOutput = FinalOutput + "Horizon Resticted MW skins: " + ValidHorizonRestrictedMWcount + "\n";

        const BaseOrPriceKilowattALL = await BaseOrPrice2(ALLKilowattClassifiedFNLink,KilowattOutputs,KilowattOutputLinks);
        var BuyKilowattRestrictedsFor = SevenMW(BaseOrPriceDASALL, BaseOrPriceKilowattALL);
        const ValidKilowattRestrictedMWcount = await Valids(KilowattRestrictedMWLink,BuyKilowattRestrictedsFor);
        FinalOutput = FinalOutput + "Kilowatt Resticted MW price: $" + Math.floor(BuyKilowattRestrictedsFor) / 100 + "\n";
        FinalOutput = FinalOutput + "Kilowatt Resticted MW skins: " + ValidKilowattRestrictedMWcount + "\n";

        const BaseOrPriceRecoilALL2 = await BaseOrPrice2(ALLRecoilClassifiedFNLink,RecoilOutputs,RecoilOutputLinks);
        var BuyRecoilRestrictedsFNFor = ThreeFN(BaseOrPriceRecoilALL2, BaseOrPriceRevolutionALL);
        const ValidRecoilRestrictedFNcount = await Valids(RecoilRestrictedFNLink,BuyRecoilRestrictedsFNFor);
        FinalOutput = FinalOutput + "Recoil Resticted FN price: $" + Math.floor(BuyRecoilRestrictedsFNFor) / 100 + "\n";
        FinalOutput = FinalOutput + "Recoil Resticted FN skins: " + ValidRecoilRestrictedFNcount + "\n";

    } catch (error) {
        document.getElementById('output').textContent = 'Error fetching data: ' + error;
    }
    FinalOutput = "Requests: " + requestsNum + "\n" + FinalOutput;
    document.getElementById('output').textContent = FinalOutput;
});

function SevenMW(MainFNOutputs, MainMWOutputs){
    return (((MainFNOutputs*.3+MainMWOutputs*.7)/1.13)-(DreamsAndNightmaresRestrictedFNBasePrice*3))/7
}

function ThreeFN(MainFNOutputs,MainMWOutputs){
    return (((MainFNOutputs*.3+MainMWOutputs*.7)/1.13)-(BuyRevolutionRestrictedsFor*7))/3;
}

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