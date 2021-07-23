import React from "react";
import { StyledTitle } from "../../components/designSystem/mobileDS";
import Orange from "../../components/svgs/mobileBackgrounds/Orange.svg";
import NotificationBarWhite from "../../components/MobileNotification/NotificationBarWhite";
import { BackgroundCircle, FlyingBox } from "../../components/designSystem/mobileDS";
import { MobileInfoBox } from "../../components/mobileComponents/mobileInfoBox/mobileInfoBox";
import { MobileBadges } from "../../components/mobileComponents/mobileBadges/mobileBadges"


export default function MobileAchievements() {

    return (
        <>
            {/* NotificationBar starts here */}
            <NotificationBarWhite/>
            {/* NotificationBar ends here */}
            <FlyingBox zindx={1} top={50}>
                <div className="d-flex flex-column">
                    <div className="d-flex flex-row justify-content-center">
                        <StyledTitle type={"title"} mode={"over_dark"}>Achievements</StyledTitle>
                    </div>
                    <MobileInfoBox type="statBox" />
                    <div className="d-flex flex-row justify-content-center">
                        <MobileBadges/>
                    </div>
                </div>
            </FlyingBox>

            <BackgroundCircle src={Orange} alt="Upper background color" />
        </>
    );
}