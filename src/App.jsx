/* eslint-disable */
import React from 'react';
import {
  InformationCircleIcon, DocumentIcon, BellIcon, InboxIcon, DotsHorizontalIcon, DotsVerticalIcon,
} from '@heroicons/react/outline';
import { ColourThemeSwatch } from './components/colourThemeSwatch/ColourThemeSwatch';
import { IdentifierIcon } from './components/identifierIcon/IdentifierIcon';
import { IconTooltip } from './components/tooltip/IconTooltip';
import { Tooltip } from './components/tooltip/Tooltip';
import { Tag } from './components/tags/Tag';
import { AddTag } from './components/tags/AddTag';
import { Modal } from './components/modal/Modal';
import { Badge } from './components/badge/Badge';
import Button from './components/button/Button';
import Label from './components/label/Label';
import Toggle from './components/toggle/Toggle';


import {CreateDocument as CreateDocumentLight} from './components/pictograms/light/CreateDocument';
import {CreateDocument as CreateDocumentDark} from './components/pictograms/dark/CreateDocument';
import {Email as EmailLight} from './components/pictograms/light/Email';
import {Email as EmailDark} from './components/pictograms/dark/Email';
import {Print as PrintLight} from './components/pictograms/light/Print';
import {Print as PrintDark} from './components/pictograms/dark/Print';
import {Sign as SignLight} from './components/pictograms/light/Sign';
import {Sign as SignDark} from './components/pictograms/dark/Sign';
import {Scan as ScanLight} from './components/pictograms/light/Scan';
import {Scan as ScanDark} from './components/pictograms/dark/Scan';
import {PhoneTap as PhoneTapLight} from './components/pictograms/light/PhoneTap';
import {PhoneTap as PhoneTapDark} from './components/pictograms/dark/PhoneTap';
import {EditDocument as EditDocumentLight} from './components/pictograms/light/EditDocument';
import {EditDocument as EditDocumentDark} from './components/pictograms/dark/EditDocument';
import {SendDoc as SendDocLight} from './components/pictograms/light/SendDoc';
import {SendDoc as SendDocDark} from './components/pictograms/dark/SendDoc';
import {ShareData as ShareDataLight} from './components/pictograms/light/ShareData';
import {ShareData as ShareDataDark} from './components/pictograms/dark/ShareData';
import {SignedDoc as SignedDocLight} from './components/pictograms/light/SignedDoc';
import {SignedDoc as SignedDocDark} from './components/pictograms/dark/SignedDoc';
import {SignedDocMulti as SignedDocMultiLight} from './components/pictograms/light/SignedDocMulti';
import {SignedDocMulti as SignedDocMultiDark} from './components/pictograms/dark/SignedDocMulti';
import {Signer as SignerLight} from './components/pictograms/light/Signer';
import {Signer as SignerDark} from './components/pictograms/dark/Signer';
import {UnknownSigner as UnknownSignerLight} from './components/pictograms/light/UnknownSigner';
import {UnknownSigner as UnknownSignerDark} from './components/pictograms/dark/UnknownSigner';
import {Approver as ApproverLight} from './components/pictograms/light/Approver';
import {Approver as ApproverDark} from './components/pictograms/dark/Approver';


import {Audit as AuditLight} from './components/pictograms/light/Audit';
import {Audit as AuditDark} from './components/pictograms/dark/Audit';
import {OnlineSign as OnlineSignLight} from './components/pictograms/light/OnlineSign';
import {OnlineSign as OnlineSignDark} from './components/pictograms/dark/OnlineSign';
import {DownloadDoc as DownloadDocLight} from './components/pictograms/light/DownloadDoc';
import {DownloadDoc as DownloadDocDark} from './components/pictograms/dark/DownloadDoc';
import {Time as TimeLight} from './components/pictograms/light/Time';
import {Time as TimeDark} from './components/pictograms/dark/Time';
import {Speed as SpeedLight} from './components/pictograms/light/Speed';
import {Speed as SpeedDark} from './components/pictograms/dark/Speed';
import {Wetlink as WetlinkLight} from './components/pictograms/light/Wetlink';
import {Wetlink as WetlinkDark} from './components/pictograms/dark/Wetlink';
import {Online as OnlineLight} from './components/pictograms/light/Online';
import {Online as OnlineDark} from './components/pictograms/dark/Online';
import {Secure as SecureLight} from './components/pictograms/light/Secure';
import {Secure as SecureDark} from './components/pictograms/dark/Secure';
import {Link as LinkLight} from './components/pictograms/light/Link';
import {Link as LinkDark} from './components/pictograms/dark/Link';
import {SingleDoc as SingleDocLight} from './components/pictograms/light/SingleDoc';
import {SingleDoc as SingleDocDark} from './components/pictograms/dark/SingleDoc';
import {MultiDocs as MultiDocsLight} from './components/pictograms/light/MultiDocs';
import {MultiDocs as MultiDocsDark} from './components/pictograms/dark/MultiDocs';
import {Duplicate as DuplicateLight} from './components/pictograms/light/Duplicate';
import {Duplicate as DuplicateDark} from './components/pictograms/dark/Duplicate';
import {AddPage as AddPageLight} from './components/pictograms/light/AddPage';
import {AddPage as AddPageDark} from './components/pictograms/dark/AddPage';
import {MailStack as MailStackLight} from './components/pictograms/light/MailStack';
import {MailStack as MailStackDark} from './components/pictograms/dark/MailStack';


import {UploadPictogram as UploadPictogramLight} from './components/pictograms/light/UploadPictogram';
import {UploadPictogram as UploadPictogramDark} from './components/pictograms/dark/UploadPictogram';
import {DownloadCloud as DownloadCloudLight} from './components/pictograms/light/DownloadCloud';
import {DownloadCloud as DownloadCloudDark} from './components/pictograms/dark/DownloadCloud';
import {Lightbulb as LightbulbLight} from './components/pictograms/light/Lightbulb';
import {Lightbulb as LightbulbDark} from './components/pictograms/dark/Lightbulb';
import {Shield as ShieldLight} from './components/pictograms/light/Shield';
import {Shield as ShieldDark} from './components/pictograms/dark/Shield';
import {ReloadPage as ReloadPageLight} from './components/pictograms/light/ReloadPage';
import {ReloadPage as ReloadPageDark} from './components/pictograms/dark/ReloadPage';
import {SendPage as SendPageLight} from './components/pictograms/light/SendPage';
import {SendPage as SendPageDark} from './components/pictograms/dark/SendPage';
import {FrozenDoc as FrozenDocLight} from './components/pictograms/light/FrozenDoc';
import {FrozenDoc as FrozenDocDark} from './components/pictograms/dark/FrozenDoc';
import {Search as SearchLight} from './components/pictograms/light/Search';
import {Search as SearchDark} from './components/pictograms/dark/Search';
import {FolderAlt as FolderAltLight} from './components/pictograms/light/FolderAlt';
import {FolderAlt as FolderAltDark} from './components/pictograms/dark/FolderAlt';
import {Folder as FolderLight} from './components/pictograms/light/Folder';
import {Folder as FolderDark} from './components/pictograms/dark/Folder';
import {FolderAlt2 as FolderAlt2Light} from './components/pictograms/light/FolderAlt2';
import {FolderAlt2 as FolderAlt2Dark} from './components/pictograms/dark/FolderAlt2';
import {FolderAlt3 as FolderAlt3Light} from './components/pictograms/light/FolderAlt3';
import {FolderAlt3 as FolderAlt3Dark} from './components/pictograms/dark/FolderAlt3';
import {Settings as SettingsLight} from './components/pictograms/light/Settings';
import {Settings as SettingsDark} from './components/pictograms/dark/Settings';
import {SettingsAlt2 as SettingsAlt2Light} from './components/pictograms/light/SettingsAlt2';
import {SettingsAlt2 as SettingsAlt2Dark} from './components/pictograms/dark/SettingsAlt2';
import {OnlineSecurity as OnlineSecurityLight} from './components/pictograms/light/OnlineSecurity';
import {OnlineSecurity as OnlineSecurityDark} from './components/pictograms/dark/OnlineSecurity';
import {Diamond as DiamondLight} from './components/pictograms/light/Diamond';
import {Diamond as DiamondDark} from './components/pictograms/dark/Diamond';
import {Overview as OverviewLight} from './components/pictograms/light/Overview';
import {Overview as OverviewDark} from './components/pictograms/dark/Overview';
import {SecureV1 as SecureV1Light} from './components/pictograms/light/SecureV1';
import {SecureV1 as SecureV1Dark} from './components/pictograms/dark/SecureV1';
import {PageCog as PageCogLight} from './components/pictograms/light/PageCog';
import {PageCog as PageCogDark} from './components/pictograms/dark/PageCog';
import {HandGlobe as HandGlobeLight} from './components/pictograms/light/HandGlobe';
import {HandGlobe as HandGlobeDark} from './components/pictograms/dark/HandGlobe';
import {HandDocument as HandDocumentLight} from './components/pictograms/light/HandDocument';
import {HandDocument as HandDocumentDark} from './components/pictograms/dark/HandDocument';
import {MoneyCheckBoxes as MoneyCheckBoxesLight} from './components/pictograms/light/MoneyCheckBoxes';
import {MoneyCheckBoxes as MoneyCheckBoxesDark} from './components/pictograms/dark/MoneyCheckBoxes';
import {MoneyLineGraphV2 as MoneyLineGraphV2Light} from './components/pictograms/light/MoneyLineGraphV2';
import {MoneyLineGraphV2 as MoneyLineGraphV2Dark} from './components/pictograms/dark/MoneyLineGraphV2';
import {MoneyLineGraphV1 as MoneyLineGraphV1Light} from './components/pictograms/light/MoneyLineGraphV1';
import {MoneyLineGraphV1 as MoneyLineGraphV1Dark} from './components/pictograms/dark/MoneyLineGraphV1';
import {MoneyBarChart as MoneyBarChartLight} from './components/pictograms/light/MoneyBarChart';
import {MoneyBarChart as MoneyBarChartDark} from './components/pictograms/dark/MoneyBarChart';
import {EconomicGrowth as EconomicGrowthLight} from './components/pictograms/light/EconomicGrowth';
import {EconomicGrowth as EconomicGrowthDark} from './components/pictograms/dark/EconomicGrowth';
import {HandMoney as HandMoneyLight} from './components/pictograms/light/HandMoney';
import {HandMoney as HandMoneyDark} from './components/pictograms/dark/HandMoney';
import {SustainablePageV2 as SustainablePageV2Light} from './components/pictograms/light/SustainablePageV2';
import {SustainablePageV2 as SustainablePageV2Dark} from './components/pictograms/dark/SustainablePageV2';
import {DocumentConnect as DocumentConnectLight} from './components/pictograms/light/DocumentConnect';
import {DocumentConnect as DocumentConnectDark} from './components/pictograms/dark/DocumentConnect';
import {SustainablePageV1 as SustainablePageV1Light} from './components/pictograms/light/SustainablePageV1';
import {SustainablePageV1 as SustainablePageV1Dark} from './components/pictograms/dark/SustainablePageV1';
import {SustainableLightbulb as SustainableLightbulbLight} from './components/pictograms/light/SustainableLightbulb';
import {SustainableLightbulb as SustainableLightbulbDark} from './components/pictograms/dark/SustainableLightbulb';
import {MoneyPage as MoneyPageLight} from './components/pictograms/light/MoneyPage';
import {MoneyPage as MoneyPageDark} from './components/pictograms/dark/MoneyPage';
import {OnlineApproval as OnlineApprovalLight} from './components/pictograms/light/OnlineApproval';
import {OnlineApproval as OnlineApprovalDark} from './components/pictograms/dark/OnlineApproval';
import {ChatBubbleV1 as ChatBubbleV1Light} from './components/pictograms/light/ChatBubbleV1';
import {ChatBubbleV1 as ChatBubbleV1Dark} from './components/pictograms/dark/ChatBubbleV1';
import {ChatBubbleV2 as ChatBubbleV2Light} from './components/pictograms/light/ChatBubbleV2';
import {ChatBubbleV2 as ChatBubbleV2Dark} from './components/pictograms/dark/ChatBubbleV2';
import {GDPR as GDPRLight} from './components/pictograms/light/GDPR';
import {GDPR as GDPRDark} from './components/pictograms/dark/GDPR';
import {IndustryBuildingsV1 as IndustryBuildingsV1Light} from './components/pictograms/light/IndustryBuildingsV1';
import {IndustryBuildingsV1 as IndustryBuildingsV1Dark} from './components/pictograms/dark/IndustryBuildingsV1';
import {IndustryBuildingsV2 as IndustryBuildingsV2Light} from './components/pictograms/light/IndustryBuildingsV2';
import {IndustryBuildingsV2 as IndustryBuildingsV2Dark} from './components/pictograms/dark/IndustryBuildingsV2';
import {IndustryBuildingsV3 as IndustryBuildingsV3Light} from './components/pictograms/light/IndustryBuildingsV3';
import {IndustryBuildingsV3 as IndustryBuildingsV3Dark} from './components/pictograms/dark/IndustryBuildingsV3';
import {SustainableCycle as SustainableCycleLight} from './components/pictograms/light/SustainableCycle';
import {SustainableCycle as SustainableCycleDark} from './components/pictograms/dark/SustainableCycle';

import {PadlockCheck as PadlockCheckLight} from './components/pictograms/light/PadlockCheck';
import {PadlockCheck as PadlockCheckDark} from './components/pictograms/dark/PadlockCheck';
import {PadlockShield as PadlockShieldLight} from './components/pictograms/light/PadlockShield';
import {PadlockShield as PadlockShieldDark} from './components/pictograms/dark/PadlockShield';
import {PadlockShieldAndStars as PadlockShieldAndStarsLight} from './components/pictograms/light/PadlockShieldAndStars';
import {PadlockShieldAndStars as PadlockShieldAndStarsDark} from './components/pictograms/dark/PadlockShieldAndStars';

import {HandChatBubbleQuestion as HandChatBubbleQuestionLight} from './components/pictograms/light/HandChatBubbleQuestion';
import {HandChatBubbleQuestion as HandChatBubbleQuestionDark} from './components/pictograms/dark/HandChatBubbleQuestion';
import {HandChatBubbleText as HandChatBubbleTextLight} from './components/pictograms/light/HandChatBubbleText';
import {HandChatBubbleText as HandChatBubbleTextDark} from './components/pictograms/dark/HandChatBubbleText';
import {HandChatBubbleDots as HandChatBubbleDotsLight} from './components/pictograms/light/HandChatBubbleDots';
import {HandChatBubbleDots as HandChatBubbleDotsDark} from './components/pictograms/dark/HandChatBubbleDots';

import {UploadDocumentSuccessful as UploadDocumentSuccessfulLight} from './components/pictograms/light/UploadDocumentSuccessful';
import {UploadDocumentSuccessful as UploadDocumentSuccessfulDark} from './components/pictograms/dark/UploadDocumentSuccessful';
import {UploadDocumentFailed as UploadDocumentFailedLight} from './components/pictograms/light/UploadDocumentFailed';
import {UploadDocumentFailed as UploadDocumentFailedDark} from './components/pictograms/dark/UploadDocumentFailed';
import {UploadDocumentWarning as UploadDocumentWarningLight} from './components/pictograms/light/UploadDocumentWarning';
import {UploadDocumentWarning as UploadDocumentWarningDark} from './components/pictograms/dark/UploadDocumentWarning';
import {UploadDocumentPreUpload as UploadDocumentPreUploadLight} from './components/pictograms/light/UploadDocumentPreUpload';
import {UploadDocumentPreUpload as UploadDocumentPreUploadDark} from './components/pictograms/dark/UploadDocumentPreUpload';

import {UploadImagePreUploadRectangle as UploadImagePreUploadRectangleLight} from './components/pictograms/light/UploadImagePreUploadRectangle';
import {UploadImagePreUploadRectangle as UploadImagePreUploadRectangleDark} from './components/pictograms/dark/UploadImagePreUploadRectangle';
import {UploadImageSuccessfulRectangle as UploadImageSuccessfulRectangleLight} from './components/pictograms/light/UploadImageSuccessfulRectangle';
import {UploadImageSuccessfulRectangle as UploadImageSuccessfulRectangleDark} from './components/pictograms/dark/UploadImageSuccessfulRectangle';
import {UploadImageWarningRectangle as UploadImageWarningRectangleLight} from './components/pictograms/light/UploadImageWarningRectangle';
import {UploadImageWarningRectangle as UploadImageWarningRectangleDark} from './components/pictograms/dark/UploadImageWarningRectangle';
import {UploadImageFailedRectangle as UploadImageFailedRectangleLight} from './components/pictograms/light/UploadImageFailedRectangle';
import {UploadImageFailedRectangle as UploadImageFailedRectangleDark} from './components/pictograms/dark/UploadImageFailedRectangle';
import {UploadImagePreUploadSquare as UploadImagePreUploadSquareLight} from './components/pictograms/light/UploadImagePreUploadSquare';
import {UploadImagePreUploadSquare as UploadImagePreUploadSquareDark} from './components/pictograms/dark/UploadImagePreUploadSquare';
import {UploadImageSuccessfulSquare as UploadImageSuccessfulSquareLight} from './components/pictograms/light/UploadImageSuccessfulSquare';
import {UploadImageSuccessfulSquare as UploadImageSuccessfulSquareDark} from './components/pictograms/dark/UploadImageSuccessfulSquare';
import {UploadImageWarningSquare as UploadImageWarningSquareLight} from './components/pictograms/light/UploadImageWarningSquare';
import {UploadImageWarningSquare as UploadImageWarningSquareDark} from './components/pictograms/dark/UploadImageWarningSquare';
import {UploadImageFailedSquare as UploadImageFailedSquareLight} from './components/pictograms/light/UploadImageFailedSquare';
import {UploadImageFailedSquare as UploadImageFailedSquareDark} from './components/pictograms/dark/UploadImageFailedSquare';

function App() {
  return (
    <div className="App m-40">
      {/* <div className="App relative top-40 left-10"> */}

      <div className='flex flex-wrap justify-evenly m-5 p-5 bg-teal-10'>



        {/* <CreateDocumentLight />
        <EmailLight />
        <PrintLight />
        <SignLight />
        <ScanLight />
        <PhoneTapLight />
        <EditDocumentLight />
        <SendDocLight />
        <ShareDataLight />
        <SignedDocLight />
        <SignedDocMultiLight />
        <SignerLight />
        <UnknownSignerLight />
        <ApproverLight /> */}


        {/* <AuditLight />
        <OnlineSignLight />
        <DownloadDocLight />
        <TimeLight />
        <SpeedLight />
        <WetlinkLight />
        <OnlineLight />
        <SecureLight />
        <LinkLight />
        <SingleDocLight />
        <MultiDocsLight />
        <DuplicateLight />
        <AddPageLight />
        <MailStackLight /> */}
      
      
        {/* <UploadPictogramLight />
        <DownloadCloudLight />
        <LightbulbLight />
        <ShieldLight />
        <ReloadPageLight />
        <SendPageLight />
        <FrozenDocLight />
        <SearchLight />
        <FolderAltLight />
        <FolderLight />
        <FolderAlt2Light />
        <FolderAlt3Light />
        <SettingsLight />
        <SettingsAlt2Light /> */}


        {/* <OnlineSecurityLight />
        <DiamondLight />
        <OverviewLight />
        <SecureV1Light />
        <PageCogLight />
        <HandGlobeLight />
        <HandDocumentLight /> */}


        {/* <MoneyCheckBoxesLight />
        <MoneyLineGraphV2Light />
        <MoneyLineGraphV1Light />
        <MoneyBarChartLight />
        <EconomicGrowthLight />
        <HandMoneyLight />
        <SustainablePageV2Light />
        <DocumentConnectLight />
        <SustainablePageV1Light />
        <SustainableLightbulbLight /> */}


        {/* <MoneyPageLight />
        <OnlineApprovalLight />
        <ChatBubbleV1Light />
        <ChatBubbleV2Light />
        <GDPRLight />
        <IndustryBuildingsV1Light />
        <IndustryBuildingsV2Light />
        <IndustryBuildingsV3Light />
        <SustainableCycleLight /> */}


        {/* <PadlockCheckLight />
        <PadlockShieldLight />
        <PadlockShieldAndStarsLight /> */}

        {/* <HandChatBubbleQuestionLight />
        <HandChatBubbleTextLight />
        <HandChatBubbleDotsLight /> */}


        {/* <UploadDocumentSuccessfulLight />
        <UploadDocumentFailedLight />
        <UploadDocumentWarningLight />
        <UploadDocumentPreUploadLight /> */}


        {/* <UploadImagePreUploadRectangleLight />
        <UploadImageSuccessfulRectangleLight />
        <UploadImageWarningRectangleLight />
        <UploadImageFailedRectangleLight />
        <UploadImagePreUploadSquareLight />
        <UploadImageSuccessfulSquareLight />
        <UploadImageWarningSquareLight />
        <UploadImageFailedSquareLight /> */}

      </div>

      <div className='flex flex-wrap justify-evenly m-5 p-5 bg-green-900'>

        {/* <CreateDocumentDark />
        <EmailDark />
        <PrintDark />
        <SignDark />
        <ScanDark />
        <PhoneTapDark />
        <EditDocumentDark />
        <SendDocDark />
        <ShareDataDark />
        <SignedDocDark />
        <SignedDocMultiDark />
        <SignerDark />
        <UnknownSignerDark />
        <ApproverDark />   */}


        {/* <AuditDark />
        <OnlineSignDark />
        <DownloadDocDark />
        <TimeDark />
        <SpeedDark />
        <WetlinkDark />
        <OnlineDark />
        <SecureDark />
        <LinkDark />
        <SingleDocDark />
        <MultiDocsDark />
        <DuplicateDark />
        <AddPageDark />
        <MailStackDark /> */}


        {/* <UploadPictogramDark />
        <DownloadCloudDark />
        <LightbulbDark />
        <ShieldDark />
        <ReloadPageDark />
        <SendPageDark />
        <FrozenDocDark />
        <SearchDark />
        <FolderAltDark />
        <FolderDark />
        <FolderAlt2Dark />
        <FolderAlt3Dark />
        <SettingsDark />
        <SettingsAlt2Dark /> */}


        {/* <OnlineSecurityDark />
        <DiamondDark />
        <OverviewDark />
        <SecureV1Dark />
        <PageCogDark />
        <HandGlobeDark />
        <HandDocumentDark /> */}


        {/* <MoneyCheckBoxesDark />
        <MoneyLineGraphV2Dark />
        <MoneyLineGraphV1Dark />
        <MoneyBarChartDark />
        <EconomicGrowthDark />
        <HandMoneyDark />
        <SustainablePageV2Dark />
        <DocumentConnectDark />
        <SustainablePageV1Dark />
        <SustainableLightbulbDark /> */}


        {/* <MoneyPageDark />
        <OnlineApprovalDark />
        <ChatBubbleV1Dark />
        <ChatBubbleV2Dark />
        <GDPRDark />
        <IndustryBuildingsV1Dark />
        <IndustryBuildingsV2Dark />
        <IndustryBuildingsV3Dark />
        <SustainableCycleDark /> */}

        {/* <PadlockCheckDark />
        <PadlockShieldDark />
        <PadlockShieldAndStarsDark /> */}


        {/* <HandChatBubbleQuestionDark />
        <HandChatBubbleTextDark />
        <HandChatBubbleDotsDark /> */}


        {/* <UploadDocumentSuccessfulDark />
        <UploadDocumentFailedDark />
        <UploadDocumentWarningDark />
        <UploadDocumentPreUploadDark /> */}


        {/* <UploadImagePreUploadRectangleDark />
        <UploadImageSuccessfulRectangleDark />
        <UploadImageWarningRectangleDark />
        <UploadImageFailedRectangleDark />
        <UploadImagePreUploadSquareDark />
        <UploadImageSuccessfulSquareDark />
        <UploadImageWarningSquareDark />
        <UploadImageFailedSquareDark /> */}
      </div>






      {/* <ColourThemeSwatch color="yellow" /> */}
      {/* <IdentifierIcon
        color="green"
        size="sm"
        type="icon"
        Icon={DocumentIcon}
        statusIndicator={true}
        status={true}
        initials="gJ"
    /> */}

      {/* <IconTooltip
        selected="click"
        Icon={InformationCircleIcon}
        pointerPosition="top"
        // arrowPosition="centre"
        // tooltipWidth="w-36"
      >
        <h3 className="m-1 font-semibold">Info Header</h3>
        <p className="m-1 font-redhat">Please use this field to add additional information</p>
        <a href="https://test.com" className="m-1 text-blue-60 dark:text-blue-50">Link</a>

      </IconTooltip> */}

      {/* <Tooltip
        // text={
        // <>
        //   <h3 className="m-1 font-semibold">Info Header</h3>
        //   <p className="m-1 font-redhat">Please use this field to add additional information</p>
        // </>
        // }
        text="tooltip Please use this field to add additional informationPlease use this field to add additional informationPlease use this field to add additional informationPlease use this field to add additional informationPlease use this field to add additional information"
      >
        <p>Click here</p>
      </Tooltip> */}

      {/* <AddTag
        // children="Remove Tag"
        // size="lg"
      /> */}
      {/* <Tag
        children="Tag"
        size="lg"
        color="teal"
        dot={true}
        icon={true}
        iconType="add"
      /> */}

      {/* <Modal
        children="Hello there"
        title="New Document"
        infoTextColor="green"
        infoTextChildren={
          <p><span className="font-medium">Warning:</span> Warning text here</p>
        }
        btnText="Again"
        BtnIcon={InboxIcon}
        handleClick={() => {
          console.log("handled!")
        }}
      >
          <h3 className="m-1 font-semibold">Info Header</h3>
          <p className="m-1 font-redhat">Please use this field to add additional information Please use this field to add additional</p>
          <h3 className="m-1 font-semibold">Info Header</h3>
          <p className="m-1 font-redhat">Please use this field to add additional information Please use this field to add additional</p>

      </Modal>
 */}

      {/* <Badge
        children="1"
        className=""
        size="lg"
        color="teal"
        LeadingIcon={InboxIcon}
        TrailingIcon={BellIcon}
        rounded="full"
        iconOnly={false}
      />  */}

    </div>
  );
}

export default App;
