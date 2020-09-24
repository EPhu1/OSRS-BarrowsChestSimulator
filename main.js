function resizer(item, slot)
{
    var resize100_0 = ["Ahrims_robetop", "Guthans_helm", "Torags_helm", "Torags_platebody", "Torags_hammers", "Karils_crossbow", 
                       "Karils_leathertop", "Dharoks_platebody", "Bolt_rack_1", "Bolt_rack_2", "Bolt_rack_3", "Bolt_rack_4", "Bolt_rack_5", "Clue_scroll"];
    var resize50_0 = ["Coins_2", "Coins_3", "Loop_half_of_key", "Tooth_half_of_key"];
    var resize50_100 = ["Dharoks_platelegs", "Torags_platelegs"];
    var resize90_0 = ["Coins_4", "Coins_5", "Coins_25", "Coins_100", "Coins_250", "Coins_1000"];
    if(resize100_0.includes(item))
    {
        document.getElementById(slot).style.backgroundSize = "100%";
    }
    else if(resize50_0.includes(item))
    {
        document.getElementById(slot).style.backgroundSize = "50%";
    }
    else if(resize50_100.includes(item))
    {
        document.getElementById(slot).style.backgroundSize = "50% 100%";
    }
    else if(resize90_0.includes(item))
    {
        document.getElementById(slot).style.backgroundSize = "90%";
    }
    else if(item == "Guthans_platebody" || item == "Ahrims_robeskirt")
    {
        document.getElementById(slot).style.backgroundSize = "70% 100%";
    }
    else if(item == "Guthans_chainskirt")
    {
        document.getElementById(slot).style.backgroundSize = "60% 100%";
    }
    else if(item == "Coins_1")
    {
        document.getElementById(slot).style.backgroundSize = "30%";
    }
    else
    {
        document.getElementById(slot).style.backgroundSize = "100% 100%";
    }
}

function barrowsMechanics()
{
    var itemsList = [];
    var test = [];
    var brotherCount = 6;
    var chance = 450 - (58 * brotherCount);
    var barrowsItems = ["Ahrims_hood", "Ahrims_robeskirt", "Ahrims_robetop", "Ahrims_staff", "Dharoks_greataxe", "Dharoks_helm", 
                        "Dharoks_platebody", "Dharoks_platelegs", "Guthans_chainskirt", "Guthans_helm", "Guthans_platebody", 
                        "Guthans_warspear", "Karils_coif", "Karils_crossbow", "Karils_leatherskirt", "Karils_leathertop", 
                        "Torags_hammers", "Torags_helm", "Torags_platebody", "Torags_platelegs", "Veracs_brassard", "Veracs_flail", 
                        "Veracs_helm", "Veracs_plateskirt"];
    for(i = 0; i < brotherCount; i++)
    {
        var num = Math.floor((Math.random() * chance) + 1);
        if(num == 1)
        {
            var barrowsRoll = Math.floor((Math.random() * barrowsItems.length));
            itemsList.push(barrowsItems[barrowsRoll]);
            barrowsItems.splice(barrowsRoll, 1);
            test.push(barrowsRoll);
        }
        else
        {
            var rewardPotential = Math.floor((Math.random() * 1012) + 1);
            if(rewardPotential <= 380)
            {
                itemsList.push("Coins");
            }
            else if(rewardPotential <= 505)
            {
                itemsList.push("Mind_rune");
            }
            else if(rewardPotential <= 630)
            {
                itemsList.push("Chaos_rune");
            }
            else if(rewardPotential <= 755)
            {
                itemsList.push("Death_rune");
            }
            else if(rewardPotential <= 880)
            {
                itemsList.push("Blood_rune");
            }
            else if(rewardPotential <= 1005)
            {
                itemsList.push("Bolt_rack");
            }
            else if(rewardPotential <= 1008)
            {
                itemsList.push("Loop_half_of_key");
            }
            else if(rewardPotential <= 1011)
            {
                itemsList.push("Tooth_half_of_key");
            }
            else if(rewardPotential == 1012)
            {
                itemsList.push("Dragon_med_helm");
            }
        }
    }
    var uniqueItems = [...new Set(itemsList)]//makes an array of unique values from itemsList
    if(uniqueItems.length < 6)
    {
        var num = Math.floor((Math.random() * 135) + 1);
        if(num <= 4)
        {
            uniqueItems.push("Clue_scroll");
        }
    }
    return uniqueItems;
}

function getItems()
{
    for(i = 1; i <= 6; i++)
    {
        document.getElementById("quantity" + (i)).innerHTML = "";
    }
    var items = barrowsMechanics();
    for(i = 0; i < items.length; i++)
    {
        if(items[i] == "Coins")
        {
            var count = Math.floor((Math.random() * 5306) + 1);
            document.getElementById("quantity" + (i + 1)).innerHTML = count;
            if(count == 1)
            {
                items[i] = "Coins_" + 1;
            }
            else if(count == 2)
            {
                items[i] = "Coins_" + 2;
            }
            else if(count == 3)
            {
                items[i] = "Coins_" + 3;
            }
            else if(count == 4)
            {
                items[i] = "Coins_" + 4;
            }
            else if(count == 5)
            {
                items[i] = "Coins_" + 5;
            }
            else if(count < 100)
            {
                items[i] = "Coins_" + 25;
            }
            else if(count < 250)
            {
                items[i] = "Coins_" + 100;
            }
            else if(count < 1000)
            {
                items[i] = "Coins_" + 250;
            }
            else
            {
                items[i] = "Coins_" + 1000;
            }
        }
        else if(items[i] == "Bolt_rack")
        {
            var count = Math.floor((Math.random() * 191) + 1);
            document.getElementById("quantity" + (i + 1)).innerHTML = count;
            if(count == 1)
            {
                items[i] = "Bolt_rack_" + 1;
            }
            else if(count == 2)
            {
                items[i] = "Bolt_rack_" + 2;
            }
            else if(count == 3)
            {
                items[i] = "Bolt_rack_" + 3;
            }
            else if(count == 4)
            {
                items[i] = "Bolt_rack_" + 4;
            }
            else
            {
                items[i] = "Bolt_rack_" + 5;
            }
        }
        else if(items[i].substring(items[i].length - 4) == "rune")
        {
            if(items[i] == "Mind_rune")
            {
                var count = Math.floor((Math.random() * 2889) + 1);
            }
            else if(items[i] == "Chaos_rune")
            {
                var count = Math.floor((Math.random() * 885) + 1);
            }
            else if(items[i] == "Death_rune")
            {
                var count = Math.floor((Math.random() * 578) + 1);
            }
            else if(items[i] == "Blood_rune")
            {
                var count = Math.floor((Math.random() * 236) + 1);
            }
            document.getElementById("quantity" + (i + 1)).innerHTML = count;
        }
        else
        {
            items[i] = items[i];
        }
    }
    return items;
}

function displayItems()
{
    document.getElementById("instructions").innerHTML = "";
    var items = getItems();
    var num = items.length;
    for(i = 1; i <= 6; i++)
    {
        var slot = "slot" + i;
        if(i > num)
        {
            document.getElementById(slot).style.height = 0;
            document.getElementById(slot).style.width = 0;
        }
        else
        {
            var url = "url(Images/Barrows/" + items[i-1] + ".png)";
            document.getElementById(slot).style.backgroundImage = url
            document.getElementById(slot).style.height = 80;
            document.getElementById(slot).style.width = 80;
            resizer(items[i-1], slot);
        }
    }
}

