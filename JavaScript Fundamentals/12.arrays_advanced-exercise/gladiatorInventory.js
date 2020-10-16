function gladiatorInventory(arr){
    let inventory = arr.shift().split(' ')

    for (i=0; i<arr.length; i++){
        command = arr[i].split(' ')
        let action = command[0];
        let equipment = command[1];

        if (action == "Buy"){
            if (!inventory.includes(equipment)){
                inventory.push(equipment)
            }
        } else if (action == "Trash"){
            if (inventory.includes(equipment)){
                let indexToRemove = inventory.indexOf(equipment);
                inventory.splice(indexToRemove, 1)
            }
        } else if (action == "Repair"){
            if (inventory.includes(equipment)){
                let indexToRepair = inventory.indexOf(equipment);
                inventory.splice(indexToRepair, 1)
                inventory.push(equipment)
            }
        } else { // Upgrade
            equipmentUpgrade = equipment.split('-')
            equipment = equipmentUpgrade[0];
            let upgrade = equipmentUpgrade[1];

            if (inventory.includes(equipment)){
                let indexOfUpgrade = inventory.indexOf(equipment) + 1;
                let upgradeItem = `${equipment}:${upgrade}`;
                inventory.splice(indexOfUpgrade, 0, upgradeItem)
            }
        }
    }

    console.log(inventory.join(' '));
}