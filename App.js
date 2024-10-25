import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Boat from './component/Boat';

const AllBoats =() =>{
    return(
        <ScrollView>
        <Text></Text>
            <Text></Text>
            <Text>Getaboat - for sale!</Text>
            <Text></Text>
            <Boat title="Sea Ray 500 Sundancer" desc="Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away" img={require("./img/sea_ray.jpg")}/>
            <Boat title="Four Winns Horizon 180" desc="A sporty look and refined details truly set the Horizon 180 above all others." img={require("./img/four_winns.jpg")}/>
            <Boat title="Flipper 640 ST" desc="A modern take on the classic, traditional hardtop and perfect for a family picnic." img={require("./img/flipper.jpg")}/>
            <Boat title="Princess V48" desc="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior." img={require("./img/princess.jpg")}/>
            <Boat title="Bayliner 175 Bowrider" desc="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance." img={require("./img/bayliner.jpg")}/>
            <Boat title="Fairline Targa 47" desc="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit." img={require("./img/fairline.jpg")}/>
        </ScrollView>
    );
};
export default AllBoats;
