import { View } from "react-native"
import { HeaderCard } from "../../components/profileComponents/headerCard/HeaderCard";
import { ProfileContent } from "../../components/profileComponents/ProfileContent/ProfileContent";
import { BottomLogoutButton } from "../../components/profileComponents/ProfileContent/BottomLogoutButton";
import { ButtonBottomLogout } from "../../components/profileComponents/ProfileContent/ButtonBottomLogout";

const headerIconUrl: string = ""
const profilePic = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8UDpyRVcLyyOViNVGvvk-TRAbmWfif0nemg&s"

export const ProfileScreen = ({ navigation }: any) => {
    return (
        <View style={{ flex: 1 }}>
            {/* Profile Header COntent */}
            <HeaderCard
                usernameTitle={"Mohamed Abu Basith S"}
                userSubTitile={"abubasith86@gmail.com"}
                profileUrl={profilePic}
                headerIconUrl={headerIconUrl}
                onBackButtonPress={() => { navigation.goBack(); }} />
            {/* Profile Bottom Content */}
            <ProfileContent />
            {/* Logout Button */}
            <ButtonBottomLogout onClick={() => {
                navigation.goBack();
            }} />
        </View>
    )
}