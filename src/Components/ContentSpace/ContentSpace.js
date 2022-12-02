import React, { useState } from "react";

import "./ContentSpace.css";
import HeaderTag from "./HeaderTag/HeaderTag";
import ContentTab from "./Content/ContentTab";

let dataLists = [
    {
        key: "1",
        heading1: "Peacock",
        heading2: "Ostrich",
        content1: "Peafowl is a common name for three bird species in the genera Pavo and Afropavo within the tribe Pavonini of the family Phasianidae, the pheasants and their allies. Male peafowl are referred to as peacocks, and female peafowl are referred to as peahens, even though peafowl of either sex are often referred to colloquially as peacocks.The two Asiatic species are the blue or Indian peafowl originally of the Indian subcontinent, and the green peafowl of Southeast Asia; the one African species is the Congo peafowl, native only to the Congo Basin.Male peafowl are known for their piercing calls and their extravagant plumage.The latter is especially prominent in the Asiatic species, which have an eye- spotted tail or rain of covert feathers, which they display as part of a courtship ritual.The functions of the elaborate iridescent colouration and large train of peacocks have been the subject of extensive scientific debate.Charles Darwin suggested that they served to attract females, and the showy features of the males had evolved by sexual selection.More recently, Amotz Zahavi proposed in his handicap theory that these features acted as honest signals of the males fitness, since less-fit males would be disadvantaged by the difficulty of surviving with such large and conspicuous structures.",
        content2: "Ostriches are large flightless birds of the genus Struthio in the order Struthioniformes, part of the infra-class Palaeognathae, a diverse group of flightless birds also known as ratites that includes the emus, rheas, and kiwis. There are two living species of ostrich: the common ostrich, native to large areas of sub-Saharan Africa and the Somali ostrich, native to the Horn of Africa.[2] The common ostrich was also historically native to the Arabian Peninsula, and ostriches were present across Asia as far east as Mongolia during the Late Pleistocene and possibly into the Holocene. They lay the largest eggs of any living land animal. With the ability to run at 70 km/h (43.5 mph), they are the fastest birds on land. They are farmed worldwide, particularly for their feathers as they are used as decoration and feather dusters. Their skin is also used for leather products. They are the heaviest living birds.Struthionidae is a member of the Struthioniformes, a group of paleognath birds which first appeared during the Early Eocene, and includes a variety of flightless forms which were present across the Northern Hemisphere (Europe, Asia and North America) during the Eocene epoch. The closest relatives of Struthionidae within the Struthioniformes are the Ergilornithidae, known from the late Eocene to early Pliocene of Asia."
    },
    {
        key: "2",
        heading1: "Cheetah",
        heading2: "Tiger",
        content1: "The cheetah (Acinonyx jubatus) is a large cat native to Africa and central Iran. It is the fastest land animal, estimated to be capable of running at 80 to 128 km/h (50 to 80 mph) with the fastest reliably recorded speeds being 93 and 98 km/h (58 and 61 mph), and as such has evolved specialized adaptations for speed, including a light build, long thin legs and a long tail. It typically reaches 67–94 cm (26–37 in) at the shoulder, and the head-and-body length is between 1.1 and 1.5 m (3 ft 7 in and 4 ft 11 in). Adults weigh between 21 and 72 kg (46 and 159 lb). Its head is small and rounded, with a short snout and black tear-like facial streaks. The coat is typically tawny to creamy white or pale buff and is mostly covered with evenly spaced, solid black spots. Four subspecies are recognised.The cheetah occurs in a variety of habitats such as savannahs in the Serengeti, arid mountain ranges in the Sahara and hilly desert terrain in Iran. The cheetah is threatened by several factors such as habitat loss, conflict with humans, poaching and high susceptibility to diseases. Historically ranging throughout most of Sub-Saharan Africa and extending eastward into the Middle East and to central India, the cheetah is now distributed mainly in small, fragmented populations in central Iran and southern, eastern and northwestern Africa.",
        content2: "The tiger (Panthera tigris) is the largest living cat species and a member of the genus Panthera. It is most recognisable for its dark vertical stripes on orange fur with a white underside. An apex predator, it primarily preys on ungulates, such as deer and wild boar. It is territorial and generally a solitary but social predator, requiring large contiguous areas of habitat to support its requirements for prey and rearing of its offspring. Tiger cubs stay with their mother for about two years and then become independent, leaving their mother's home range to establish their own.The tiger was first scientifically described in 1758. It once ranged widely from the Eastern Anatolia Region in the west to the Amur River basin in the east, and in the south from the foothills of the Himalayas to Bali in the Sunda Islands.Since the early 20th century, tiger populations have lost at least 93% of their historic range and have been extirpated from Western and Central Asia, the islands of Java and Bali, and in large areas of Southeast and South Asia and China.What remains of the range where tigers still roam free is fragmented, stretching in spots from Siberian temperate forests to subtropical and tropical forests on the Indian subcontinent, Indochina and a single Indonesian island, Sumatra."
    },
    {
        key: "3",
        heading1: "Whale",
        heading2: "Dolphin",
        content1: "Whales are a widely distributed and diverse group of fully aquatic placental marine mammals. As an informal and colloquial grouping, they correspond to large members of the infraorder Cetacea, i.e. all cetaceans apart from dolphins and porpoises. Dolphins and porpoises may be considered whales from a formal, cladistic perspective. Whales, dolphins and porpoises belong to the order Cetartiodactyla, which consists of even-toed ungulates. Their closest non-cetacean living relatives are the hippopotamuses, from which they and other cetaceans diverged about 54 million years ago. The two parvorders of whales, baleen whales (Mysticeti) and toothed whales (Odontoceti), are thought to have had their last common ancestor around 34 million years ago. Mysticetes include four extant (living) families: Balaenopteridae (the rorquals), Balaenidae (right whales), Cetotheriidae (the pygmy right whale), and Eschrichtiidae (the grey whale). Odontocetes include the Monodontidae (belugas and narwhals), Physeteridae (the sperm whale), Kogiidae (the dwarf and pygmy sperm whale), and Ziphiidae (the beaked whales), as well as the six families of dolphins and porpoises which are not considered whales in the informal sense.Whales are fully aquatic, open- ocean creatures: they can feed, mate, give birth, suckle and raise their young at sea.",
        content2: "A dolphin is an aquatic mammal within the infraorder Cetacea. Dolphin species belong to the families Delphinidae (the oceanic dolphins), Platanistidae (the Indian river dolphins), Iniidae (the New World river dolphins), Pontoporiidae (the brackish dolphins), and the extinct Lipotidae (baiji or Chinese river dolphin). There are 40 extant species named as dolphins.Dolphins range in size from the 1.7-metre - long(5 ft 7 in) and 50-kilogram(110 - pound) Maui dolphin to the 9.5 m (31 ft 2 in) and 10-tonne (11-short-ton) orca. Various species of dolphins exhibit sexual dimorphism where the males are larger than females. They have streamlined bodies and two limbs that are modified into flippers. Though not quite as flexible as seals, some dolphins can briefly travel at speeds of 29 kilometres (18 mi) per hour or leap about 30 feet (9.1 m).[1] Dolphins use their conical teeth to capture fast-moving prey. They have well-developed hearing which is adapted for both air and water. It is so well developed that some can survive even if they are blind. Some species are well adapted for diving to great depths. They have a layer of fat, or blubber, under the skin to keep warm in the cold water.Dolphins are sometimes hunted in places such as Japan, in an activity known as dolphin drive hunting. Besides drive hunting, they also face threats from bycatch, habitat loss, and marine pollution."
    },
    {
        key: "4",
        heading1: "Ant",
        heading2: "GrassHopper",
        content1: "Ants are eusocial insects of the family Formicidae and, along with the related wasps and bees, belong to the order Hymenoptera. Ants evolved from vespoid wasp ancestors in the Cretaceous period. More than 13,800 of an estimated total of 22,000 species have been classified. They are easily identified by their geniculate (elbowed) antennae and the distinctive node-like structure that forms their slender waists.Ants have colonised almost every landmass on Earth. The only places lacking indigenous ants are Antarctica and a few remote or inhospitable islands. Ants thrive in moist tropical ecosystems and may exceed the combined biomass of wild birds and mammals. Their success in so many environments has been attributed to their social organisation and their ability to modify habitats, tap resources, and defend themselves. Their long co-evolution with other species has led to mimetic, commensal, parasitic, and mutualistic relationships.Ant societies have division of labour, communication between individuals, and an ability to solve complex problems. These parallels with human societies have long been an inspiration and subject of study. Many human cultures make use of ants in cuisine, medication, and rites. Some species are valued in their role as biological pest control agents. Their ability to exploit resources may bring ants into conflict with humans.",
        content2: "Grasshoppers are a group of insects belonging to the suborder Caelifera. They are among what is possibly the most ancient living group of chewing herbivorous insects, dating back to the early Triassic around 250 million years ago.Grasshoppers are typically ground-dwelling insects with powerful hind legs which allow them to escape from threats by leaping vigorously. As hemimetabolous insects, they do not undergo complete metamorphosis; they hatch from an egg into a nymph or 'hopper' which undergoes five moults, becoming more similar to the adult insect at each developmental stage.[1] The grasshopper hears through the tympanal organ which can be found in the first segment of the abdomen attached to the thorax; while its sense of vision is in the compound eyes, the change in light intensity is perceived in the simple eyes (ocelli). At high population densities and under certain environmental conditions, some grasshopper species can change color and behavior and form swarms. Under these circumstances, they are known as locusts.Grasshoppers have had a long relationship with humans. Swarms of locusts can have devastating effects and cause famine, having done so since Biblical times.[2] Even in smaller numbers, the insects can be serious pests. They are used as food in countries such as Mexico and Indonesia. They feature in art, symbolism and literature."
    }

]

const ContentSpace = (props) => {

    const [header, setHeader] = useState("0");
    // const [contentId, setContentId] = useState(dataLists);

    const headerChangeHandler = (tabName) => {
        setHeader(tabName);
    }

    let content = dataLists.find(data => data.key === props.idForContent);

    return (
        <div className="contentspace-container">
            <HeaderTag headerId={header} headerContent1={content.heading1}
                headerContent2={content.heading2}>
            </HeaderTag>

            <ContentTab onTabChange={headerChangeHandler}
                tabChange={header}
                content={content}>
            </ContentTab>
        </div>

    )


}
export default ContentSpace;