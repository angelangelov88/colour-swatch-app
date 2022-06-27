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


import {CreateDocumentPictogram as CreateDocumentPictogramLight} from './components/pictograms/light/CreateDocumentPictogram';
import {CreateDocumentPictogram as CreateDocumentPictogramDark} from './components/pictograms/dark/CreateDocumentPictogram';
import {EmailPictogram as EmailPictogramLight} from './components/pictograms/light/EmailPictogram';
import {EmailPictogram as EmailPictogramDark} from './components/pictograms/dark/EmailPictogram';
import {PrintPictogram as PrintPictogramLight} from './components/pictograms/light/PrintPictogram';
import {PrintPictogram as PrintPictogramDark} from './components/pictograms/dark/PrintPictogram';
import {SignPictogram as SignPictogramLight} from './components/pictograms/light/SignPictogram';
import {SignPictogram as SignPictogramDark} from './components/pictograms/dark/SignPictogram';
import {ScanPictogram as ScanPictogramLight} from './components/pictograms/light/ScanPictogram';
import {ScanPictogram as ScanPictogramDark} from './components/pictograms/dark/ScanPictogram';
import {PhoneTapPictogram as PhoneTapPictogramLight} from './components/pictograms/light/PhoneTapPictogram';
import {PhoneTapPictogram as PhoneTapPictogramDark} from './components/pictograms/dark/PhoneTapPictogram';
import {EditDocumentPictogram as EditDocumentPictogramLight} from './components/pictograms/light/EditDocumentPictogram';
import {EditDocumentPictogram as EditDocumentPictogramDark} from './components/pictograms/dark/EditDocumentPictogram';
import {SendDocPictogram as SendDocPictogramLight} from './components/pictograms/light/SendDocPictogram';
import {SendDocPictogram as SendDocPictogramDark} from './components/pictograms/dark/SendDocPictogram';
import {ShareDataPictogram as ShareDataPictogramLight} from './components/pictograms/light/ShareDataPictogram';
import {ShareDataPictogram as ShareDataPictogramDark} from './components/pictograms/dark/ShareDataPictogram';
import {SignedDocPictogram as SignedDocPictogramLight} from './components/pictograms/light/SignedDocPictogram';
import {SignedDocPictogram as SignedDocPictogramDark} from './components/pictograms/dark/SignedDocPictogram';
import {SignedDocMultiPictogram as SignedDocMultiPictogramLight} from './components/pictograms/light/SignedDocMultiPictogram';
import {SignedDocMultiPictogram as SignedDocMultiPictogramDark} from './components/pictograms/dark/SignedDocMultiPictogram';
import {SignerPictogram as SignerPictogramLight} from './components/pictograms/light/SignerPictogram';
import {SignerPictogram as SignerPictogramDark} from './components/pictograms/dark/SignerPictogram';
import {UnknownSignerPictogram as UnknownSignerPictogramLight} from './components/pictograms/light/UnknownSignerPictogram';
import {UnknownSignerPictogram as UnknownSignerPictogramDark} from './components/pictograms/dark/UnknownSignerPictogram';
import {ApproverPictogram as ApproverPictogramLight} from './components/pictograms/light/ApproverPictogram';
import {ApproverPictogram as ApproverPictogramDark} from './components/pictograms/dark/ApproverPictogram';


import {AuditPictogram as AuditPictogramLight} from './components/pictograms/light/AuditPictogram';
import {AuditPictogram as AuditPictogramDark} from './components/pictograms/dark/AuditPictogram';
import {OnlineSignPictogram as OnlineSignPictogramLight} from './components/pictograms/light/OnlineSignPictogram';
import {OnlineSignPictogram as OnlineSignPictogramDark} from './components/pictograms/dark/OnlineSignPictogram';
import {DownloadDocPictogram as DownloadDocPictogramLight} from './components/pictograms/light/DownloadDocPictogram';
import {DownloadDocPictogram as DownloadDocPictogramDark} from './components/pictograms/dark/DownloadDocPictogram';
import {TimePictogram as TimePictogramLight} from './components/pictograms/light/TimePictogram';
import {TimePictogram as TimePictogramDark} from './components/pictograms/dark/TimePictogram';
import {SpeedPictogram as SpeedPictogramLight} from './components/pictograms/light/SpeedPictogram';
import {SpeedPictogram as SpeedPictogramDark} from './components/pictograms/dark/SpeedPictogram';
import {WetlinkPictogram as WetlinkPictogramLight} from './components/pictograms/light/WetlinkPictogram';
import {WetlinkPictogram as WetlinkPictogramDark} from './components/pictograms/dark/WetlinkPictogram';
import {OnlinePictogram as OnlinePictogramLight} from './components/pictograms/light/OnlinePictogram';
import {OnlinePictogram as OnlinePictogramDark} from './components/pictograms/dark/OnlinePictogram';
import {SecurePictogram as SecurePictogramLight} from './components/pictograms/light/SecurePictogram';
import {SecurePictogram as SecurePictogramDark} from './components/pictograms/dark/SecurePictogram';
import {LinkPictogram as LinkPictogramLight} from './components/pictograms/light/LinkPictogram';
import {LinkPictogram as LinkPictogramDark} from './components/pictograms/dark/LinkPictogram';
import {SingleDocPictogram as SingleDocPictogramLight} from './components/pictograms/light/SingleDocPictogram';
import {SingleDocPictogram as SingleDocPictogramDark} from './components/pictograms/dark/SingleDocPictogram';
import {MultiDocsPictogram as MultiDocsPictogramLight} from './components/pictograms/light/MultiDocsPictogram';
import {MultiDocsPictogram as MultiDocsPictogramDark} from './components/pictograms/dark/MultiDocsPictogram';
import {DuplicatePictogram as DuplicatePictogramLight} from './components/pictograms/light/DuplicatePictogram';
import {DuplicatePictogram as DuplicatePictogramDark} from './components/pictograms/dark/DuplicatePictogram';
import {AddPagePictogram as AddPagePictogramLight} from './components/pictograms/light/AddPagePictogram';
import {AddPagePictogram as AddPagePictogramDark} from './components/pictograms/dark/AddPagePictogram';
import {MailStackPictogram as MailStackPictogramLight} from './components/pictograms/light/MailStackPictogram';
import {MailStackPictogram as MailStackPictogramDark} from './components/pictograms/dark/MailStackPictogram';


import {UploadPictogram as UploadPictogramLight} from './components/pictograms/light/UploadPictogram';
import {UploadPictogram as UploadPictogramDark} from './components/pictograms/dark/UploadPictogram';
import {DownloadCloudPictogram as DownloadCloudPictogramLight} from './components/pictograms/light/DownloadCloudPictogram';
import {DownloadCloudPictogram as DownloadCloudPictogramDark} from './components/pictograms/dark/DownloadCloudPictogram';
import {LightbulbPictogram as LightbulbPictogramLight} from './components/pictograms/light/LightbulbPictogram';
import {LightbulbPictogram as LightbulbPictogramDark} from './components/pictograms/dark/LightbulbPictogram';
import {ShieldPictogram as ShieldPictogramLight} from './components/pictograms/light/ShieldPictogram';
import {ShieldPictogram as ShieldPictogramDark} from './components/pictograms/dark/ShieldPictogram';
import {ReloadPagePictogram as ReloadPagePictogramLight} from './components/pictograms/light/ReloadPagePictogram';
import {ReloadPagePictogram as ReloadPagePictogramDark} from './components/pictograms/dark/ReloadPagePictogram';
import {SendPagePictogram as SendPagePictogramLight} from './components/pictograms/light/SendPagePictogram';
import {SendPagePictogram as SendPagePictogramDark} from './components/pictograms/dark/SendPagePictogram';
import {FrozenDocPictogram as FrozenDocPictogramLight} from './components/pictograms/light/FrozenDocPictogram';
import {FrozenDocPictogram as FrozenDocPictogramDark} from './components/pictograms/dark/FrozenDocPictogram';
import {SearchPictogram as SearchPictogramLight} from './components/pictograms/light/SearchPictogram';
import {SearchPictogram as SearchPictogramDark} from './components/pictograms/dark/SearchPictogram';
import {FolderAltPictogram as FolderAltPictogramLight} from './components/pictograms/light/FolderAltPictogram';
import {FolderAltPictogram as FolderAltPictogramDark} from './components/pictograms/dark/FolderAltPictogram';
import {FolderPictogram as FolderPictogramLight} from './components/pictograms/light/FolderPictogram';
import {FolderPictogram as FolderPictogramDark} from './components/pictograms/dark/FolderPictogram';
import {FolderAlt2Pictogram as FolderAlt2PictogramLight} from './components/pictograms/light/FolderAlt2Pictogram';
import {FolderAlt2Pictogram as FolderAlt2PictogramDark} from './components/pictograms/dark/FolderAlt2Pictogram';
import {FolderAlt3Pictogram as FolderAlt3PictogramLight} from './components/pictograms/light/FolderAlt3Pictogram';
import {FolderAlt3Pictogram as FolderAlt3PictogramDark} from './components/pictograms/dark/FolderAlt3Pictogram';
import {SettingsPictogram as SettingsPictogramLight} from './components/pictograms/light/SettingsPictogram';
import {SettingsPictogram as SettingsPictogramDark} from './components/pictograms/dark/SettingsPictogram';
import {SettingsAlt2Pictogram as SettingsAlt2PictogramLight} from './components/pictograms/light/SettingsAlt2Pictogram';
import {SettingsAlt2Pictogram as SettingsAlt2PictogramDark} from './components/pictograms/dark/SettingsAlt2Pictogram';

import {OnlineSecurityPictogram as OnlineSecurityPictogramLight} from './components/pictograms/light/OnlineSecurityPictogram';
import {OnlineSecurityPictogram as OnlineSecurityPictogramDark} from './components/pictograms/dark/OnlineSecurityPictogram';
import {DiamondPictogram as DiamondPictogramLight} from './components/pictograms/light/DiamondPictogram';
import {DiamondPictogram as DiamondPictogramDark} from './components/pictograms/dark/DiamondPictogram';
import {OverviewPictogram as OverviewPictogramLight} from './components/pictograms/light/OverviewPictogram';
import {OverviewPictogram as OverviewPictogramDark} from './components/pictograms/dark/OverviewPictogram';
import {SecureV1Pictogram as SecureV1PictogramLight} from './components/pictograms/light/SecureV1Pictogram';
import {SecureV1Pictogram as SecureV1PictogramDark} from './components/pictograms/dark/SecureV1Pictogram';
import {PageCogPictogram as PageCogPictogramLight} from './components/pictograms/light/PageCogPictogram';
import {PageCogPictogram as PageCogPictogramDark} from './components/pictograms/dark/PageCogPictogram';
import {HandGlobePictogram as HandGlobePictogramLight} from './components/pictograms/light/HandGlobePictogram';
import {HandGlobePictogram as HandGlobePictogramDark} from './components/pictograms/dark/HandGlobePictogram';
import {HandDocumentPictogram as HandDocumentPictogramLight} from './components/pictograms/light/HandDocumentPictogram';
import {HandDocumentPictogram as HandDocumentPictogramDark} from './components/pictograms/dark/HandDocumentPictogram';

import {MoneyCheckBoxesPictogram as MoneyCheckBoxesPictogramLight} from './components/pictograms/light/MoneyCheckBoxesPictogram';
import {MoneyCheckBoxesPictogram as MoneyCheckBoxesPictogramDark} from './components/pictograms/dark/MoneyCheckBoxesPictogram';
import {MoneyLineGraphV2Pictogram as MoneyLineGraphV2PictogramLight} from './components/pictograms/light/MoneyLineGraphV2Pictogram';
import {MoneyLineGraphV2Pictogram as MoneyLineGraphV2PictogramDark} from './components/pictograms/dark/MoneyLineGraphV2Pictogram';
import {MoneyLineGraphV1Pictogram as MoneyLineGraphV1PictogramLight} from './components/pictograms/light/MoneyLineGraphV1Pictogram';
import {MoneyLineGraphV1Pictogram as MoneyLineGraphV1PictogramDark} from './components/pictograms/dark/MoneyLineGraphV1Pictogram';
import {MoneyBarChartPictogram as MoneyBarChartPictogramLight} from './components/pictograms/light/MoneyBarChartPictogram';
import {MoneyBarChartPictogram as MoneyBarChartPictogramDark} from './components/pictograms/dark/MoneyBarChartPictogram';
import {EconomicGrowthPictogram as EconomicGrowthPictogramLight} from './components/pictograms/light/EconomicGrowthPictogram';
import {EconomicGrowthPictogram as EconomicGrowthPictogramDark} from './components/pictograms/dark/EconomicGrowthPictogram';
import {HandMoneyPictogram as HandMoneyPictogramLight} from './components/pictograms/light/HandMoneyPictogram';
import {HandMoneyPictogram as HandMoneyPictogramDark} from './components/pictograms/dark/HandMoneyPictogram';
import {SustainablePageV2Pictogram as SustainablePageV2PictogramLight} from './components/pictograms/light/SustainablePageV2Pictogram';
import {SustainablePageV2Pictogram as SustainablePageV2PictogramDark} from './components/pictograms/dark/SustainablePageV2Pictogram';
import {DocumentConnectPictogram as DocumentConnectPictogramLight} from './components/pictograms/light/DocumentConnectPictogram';
import {DocumentConnectPictogram as DocumentConnectPictogramDark} from './components/pictograms/dark/DocumentConnectPictogram';
import {SustainablePageV1Pictogram as SustainablePageV1PictogramLight} from './components/pictograms/light/SustainablePageV1Pictogram';
import {SustainablePageV1Pictogram as SustainablePageV1PictogramDark} from './components/pictograms/dark/SustainablePageV1Pictogram';
import {SustainableLightbulbPictogram as SustainableLightbulbPictogramLight} from './components/pictograms/light/SustainableLightbulbPictogram';
import {SustainableLightbulbPictogram as SustainableLightbulbPictogramDark} from './components/pictograms/dark/SustainableLightbulbPictogram';

import {MoneyPagePictogram as MoneyPagePictogramLight} from './components/pictograms/light/MoneyPagePictogram';
import {MoneyPagePictogram as MoneyPagePictogramDark} from './components/pictograms/dark/MoneyPagePictogram';
import {OnlineApprovalPictogram as OnlineApprovalPictogramLight} from './components/pictograms/light/OnlineApprovalPictogram';
import {OnlineApprovalPictogram as OnlineApprovalPictogramDark} from './components/pictograms/dark/OnlineApprovalPictogram';
import {ChatBubbleV1Pictogram as ChatBubbleV1PictogramLight} from './components/pictograms/light/ChatBubbleV1Pictogram';
import {ChatBubbleV1Pictogram as ChatBubbleV1PictogramDark} from './components/pictograms/dark/ChatBubbleV1Pictogram';
import {ChatBubbleV2Pictogram as ChatBubbleV2PictogramLight} from './components/pictograms/light/ChatBubbleV2Pictogram';
import {ChatBubbleV2Pictogram as ChatBubbleV2PictogramDark} from './components/pictograms/dark/ChatBubbleV2Pictogram';
import {GDPRPictogram as GDPRPictogramLight} from './components/pictograms/light/GDPRPictogram';
import {GDPRPictogram as GDPRPictogramDark} from './components/pictograms/dark/GDPRPictogram';
import {IndustryBuildingsV1Pictogram as IndustryBuildingsV1PictogramLight} from './components/pictograms/light/IndustryBuildingsV1Pictogram';
import {IndustryBuildingsV1Pictogram as IndustryBuildingsV1PictogramDark} from './components/pictograms/dark/IndustryBuildingsV1Pictogram';
import {IndustryBuildingsV2Pictogram as IndustryBuildingsV2PictogramLight} from './components/pictograms/light/IndustryBuildingsV2Pictogram';
import {IndustryBuildingsV2Pictogram as IndustryBuildingsV2PictogramDark} from './components/pictograms/dark/IndustryBuildingsV2Pictogram';
import {IndustryBuildingsV3Pictogram as IndustryBuildingsV3PictogramLight} from './components/pictograms/light/IndustryBuildingsV3Pictogram';
import {IndustryBuildingsV3Pictogram as IndustryBuildingsV3PictogramDark} from './components/pictograms/dark/IndustryBuildingsV3Pictogram';
import {SustainableCyclePictogram as SustainableCyclePictogramLight} from './components/pictograms/light/SustainableCyclePictogram';
import {SustainableCyclePictogram as SustainableCyclePictogramDark} from './components/pictograms/dark/SustainableCyclePictogram';

import {PadlockCheckPictogram as PadlockCheckPictogramLight} from './components/pictograms/light/PadlockCheckPictogram';
import {PadlockCheckPictogram as PadlockCheckPictogramDark} from './components/pictograms/dark/PadlockCheckPictogram';
import {PadlockShieldPictogram as PadlockShieldPictogramLight} from './components/pictograms/light/PadlockShieldPictogram';
import {PadlockShieldPictogram as PadlockShieldPictogramDark} from './components/pictograms/dark/PadlockShieldPictogram';
import {PadlockShieldAndStarsPictogram as PadlockShieldAndStarsPictogramLight} from './components/pictograms/light/PadlockShieldAndStarsPictogram';
import {PadlockShieldAndStarsPictogram as PadlockShieldAndStarsPictogramDark} from './components/pictograms/dark/PadlockShieldAndStarsPictogram';

import {HandChatBubbleQuestionPictogram as HandChatBubbleQuestionPictogramLight} from './components/pictograms/light/HandChatBubbleQuestionPictogram';
import {HandChatBubbleQuestionPictogram as HandChatBubbleQuestionPictogramDark} from './components/pictograms/dark/HandChatBubbleQuestionPictogram';
import {HandChatBubbleTextPictogram as HandChatBubbleTextPictogramLight} from './components/pictograms/light/HandChatBubbleTextPictogram';
import {HandChatBubbleTextPictogram as HandChatBubbleTextPictogramDark} from './components/pictograms/dark/HandChatBubbleTextPictogram';
import {HandChatBubbleDotsPictogram as HandChatBubbleDotsPictogramLight} from './components/pictograms/light/HandChatBubbleDotsPictogram';
import {HandChatBubbleDotsPictogram as HandChatBubbleDotsPictogramDark} from './components/pictograms/dark/HandChatBubbleDotsPictogram';

import {UploadDocumentSuccessfulPictogram as UploadDocumentSuccessfulPictogramLight} from './components/pictograms/light/UploadDocumentSuccessfulPictogram';
import {UploadDocumentSuccessfulPictogram as UploadDocumentSuccessfulPictogramDark} from './components/pictograms/dark/UploadDocumentSuccessfulPictogram';
import {UploadDocumentFailedPictogram as UploadDocumentFailedPictogramLight} from './components/pictograms/light/UploadDocumentFailedPictogram';
import {UploadDocumentFailedPictogram as UploadDocumentFailedPictogramDark} from './components/pictograms/dark/UploadDocumentFailedPictogram';
import {UploadDocumentWarningPictogram as UploadDocumentWarningPictogramLight} from './components/pictograms/light/UploadDocumentWarningPictogram';
import {UploadDocumentWarningPictogram as UploadDocumentWarningPictogramDark} from './components/pictograms/dark/UploadDocumentWarningPictogram';
import {UploadDocumentPreUploadPictogram as UploadDocumentPreUploadPictogramLight} from './components/pictograms/light/UploadDocumentPreUploadPictogram';
import {UploadDocumentPreUploadPictogram as UploadDocumentPreUploadPictogramDark} from './components/pictograms/dark/UploadDocumentPreUploadPictogram';

import {UploadImagePreUploadRectanglePictogram as UploadImagePreUploadRectanglePictogramLight} from './components/pictograms/light/UploadImagePreUploadRectanglePictogram';
import {UploadImagePreUploadRectanglePictogram as UploadImagePreUploadRectanglePictogramDark} from './components/pictograms/dark/UploadImagePreUploadRectanglePictogram';
import {UploadImageSuccessfulRectanglePictogram as UploadImageSuccessfulRectanglePictogramLight} from './components/pictograms/light/UploadImageSuccessfulRectanglePictogram';
import {UploadImageSuccessfulRectanglePictogram as UploadImageSuccessfulRectanglePictogramDark} from './components/pictograms/dark/UploadImageSuccessfulRectanglePictogram';
import {UploadImageWarningRectanglePictogram as UploadImageWarningRectanglePictogramLight} from './components/pictograms/light/UploadImageWarningRectanglePictogram';
import {UploadImageWarningRectanglePictogram as UploadImageWarningRectanglePictogramDark} from './components/pictograms/dark/UploadImageWarningRectanglePictogram';
import {UploadImageFailedRectanglePictogram as UploadImageFailedRectanglePictogramLight} from './components/pictograms/light/UploadImageFailedRectanglePictogram';
import {UploadImageFailedRectanglePictogram as UploadImageFailedRectanglePictogramDark} from './components/pictograms/dark/UploadImageFailedRectanglePictogram';
import {UploadImagePreUploadSquarePictogram as UploadImagePreUploadSquarePictogramLight} from './components/pictograms/light/UploadImagePreUploadSquarePictogram';
import {UploadImagePreUploadSquarePictogram as UploadImagePreUploadSquarePictogramDark} from './components/pictograms/dark/UploadImagePreUploadSquarePictogram';
import {UploadImageSuccessfulSquarePictogram as UploadImageSuccessfulSquarePictogramLight} from './components/pictograms/light/UploadImageSuccessfulSquarePictogram';
import {UploadImageSuccessfulSquarePictogram as UploadImageSuccessfulSquarePictogramDark} from './components/pictograms/dark/UploadImageSuccessfulSquarePictogram';
import {UploadImageWarningSquarePictogram as UploadImageWarningSquarePictogramLight} from './components/pictograms/light/UploadImageWarningSquarePictogram';
import {UploadImageWarningSquarePictogram as UploadImageWarningSquarePictogramDark} from './components/pictograms/dark/UploadImageWarningSquarePictogram';
import {UploadImageFailedSquarePictogram as UploadImageFailedSquarePictogramLight} from './components/pictograms/light/UploadImageFailedSquarePictogram';
import {UploadImageFailedSquarePictogram as UploadImageFailedSquarePictogramDark} from './components/pictograms/dark/UploadImageFailedSquarePictogram';

function App() {
  return (
    <div className="App m-40">
      {/* <div className="App relative top-40 left-10"> */}

      <div className='flex flex-wrap justify-evenly m-5 p-5 bg-teal-10'>



        <CreateDocumentPictogramLight />
        <EmailPictogramLight />
        <PrintPictogramLight />
        <SignPictogramLight />
        <ScanPictogramLight />
        <PhoneTapPictogramLight />
        <EditDocumentPictogramLight />
        <SendDocPictogramLight />
        <ShareDataPictogramLight />
        <SignedDocPictogramLight />
        <SignedDocMultiPictogramLight />
        <SignerPictogramLight />
        <UnknownSignerPictogramLight />
        <ApproverPictogramLight />


        <AuditPictogramLight />
        <OnlineSignPictogramLight />
        <DownloadDocPictogramLight />
        <TimePictogramLight />
        <SpeedPictogramLight />
        <WetlinkPictogramLight />
        <OnlinePictogramLight />
        <SecurePictogramLight />
        <LinkPictogramLight />
        <SingleDocPictogramLight />
        <MultiDocsPictogramLight />
        <DuplicatePictogramLight />
        <AddPagePictogramLight />
        <MailStackPictogramLight />
      
      
        <UploadPictogramLight />
        <DownloadCloudPictogramLight />
        <LightbulbPictogramLight />
        <ShieldPictogramLight />
        <ReloadPagePictogramLight />
        <SendPagePictogramLight />
        <FrozenDocPictogramLight />
        <SearchPictogramLight />
        <FolderAltPictogramLight />
        <FolderPictogramLight />
        <FolderAlt2PictogramLight />
        <FolderAlt3PictogramLight />
        <SettingsPictogramLight />
        <SettingsAlt2PictogramLight />


        <OnlineSecurityPictogramLight />
        <DiamondPictogramLight />
        <OverviewPictogramLight />
        <SecureV1PictogramLight />
        <PageCogPictogramLight />
        <HandGlobePictogramLight />
        <HandDocumentPictogramLight />


        <MoneyCheckBoxesPictogramLight />
        <MoneyLineGraphV2PictogramLight />
        <MoneyLineGraphV1PictogramLight />
        <MoneyBarChartPictogramLight />
        <EconomicGrowthPictogramLight />
        <HandMoneyPictogramLight />
        <SustainablePageV2PictogramLight />
        <DocumentConnectPictogramLight />
        <SustainablePageV1PictogramLight />
        <SustainableLightbulbPictogramLight />


        <MoneyPagePictogramLight />
        <OnlineApprovalPictogramLight />
        <ChatBubbleV1PictogramLight />
        <ChatBubbleV2PictogramLight />
        <GDPRPictogramLight />
        <IndustryBuildingsV1PictogramLight />
        <IndustryBuildingsV2PictogramLight />
        <IndustryBuildingsV3PictogramLight />
        <SustainableCyclePictogramLight />


        <PadlockCheckPictogramLight />
        <PadlockShieldPictogramLight />
        <PadlockShieldAndStarsPictogramLight />

        <HandChatBubbleQuestionPictogramLight />
        <HandChatBubbleTextPictogramLight />
        <HandChatBubbleDotsPictogramLight />


        <UploadDocumentSuccessfulPictogramLight />
        <UploadDocumentFailedPictogramLight />
        <UploadDocumentWarningPictogramLight />
        <UploadDocumentPreUploadPictogramLight />


        <UploadImagePreUploadRectanglePictogramLight />
        <UploadImageSuccessfulRectanglePictogramLight />
        <UploadImageWarningRectanglePictogramLight />
        <UploadImageFailedRectanglePictogramLight />
        <UploadImagePreUploadSquarePictogramLight />
        <UploadImageSuccessfulSquarePictogramLight />
        <UploadImageWarningSquarePictogramLight />
        <UploadImageFailedSquarePictogramLight />

      </div>

      <div className='flex flex-wrap justify-evenly m-5 p-5 bg-green-900'>

        <CreateDocumentPictogramDark />
        <EmailPictogramDark />
        <PrintPictogramDark />
        <SignPictogramDark />
        <ScanPictogramDark />
        <PhoneTapPictogramDark />
        <EditDocumentPictogramDark />
        <SendDocPictogramDark />
        <ShareDataPictogramDark />
        <SignedDocPictogramDark />
        <SignedDocMultiPictogramDark />
        <SignerPictogramDark />
        <UnknownSignerPictogramDark />
        <ApproverPictogramDark />  


        <AuditPictogramDark />
        <OnlineSignPictogramDark />
        <DownloadDocPictogramDark />
        <TimePictogramDark />
        <SpeedPictogramDark />
        <WetlinkPictogramDark />
        <OnlinePictogramDark />
        <SecurePictogramDark />
        <LinkPictogramDark />
        <SingleDocPictogramDark />
        <MultiDocsPictogramDark />
        <DuplicatePictogramDark />
        <AddPagePictogramDark />
        <MailStackPictogramDark />


        <UploadPictogramDark />
        <DownloadCloudPictogramDark />
        <LightbulbPictogramDark />
        <ShieldPictogramDark />
        <ReloadPagePictogramDark />
        <SendPagePictogramDark />
        <FrozenDocPictogramDark />
        <SearchPictogramDark />
        <FolderAltPictogramDark />
        <FolderPictogramDark />
        <FolderAlt2PictogramDark />
        <FolderAlt3PictogramDark />
        <SettingsPictogramDark />
        <SettingsAlt2PictogramDark />


        <OnlineSecurityPictogramDark />
        <DiamondPictogramDark />
        <OverviewPictogramDark />
        <SecureV1PictogramDark />
        <PageCogPictogramDark />
        <HandGlobePictogramDark />
        <HandDocumentPictogramDark />


        <MoneyCheckBoxesPictogramDark />
        <MoneyLineGraphV2PictogramDark />
        <MoneyLineGraphV1PictogramDark />
        <MoneyBarChartPictogramDark />
        <EconomicGrowthPictogramDark />
        <HandMoneyPictogramDark />
        <SustainablePageV2PictogramDark />
        <DocumentConnectPictogramDark />
        <SustainablePageV1PictogramDark />
        <SustainableLightbulbPictogramDark />


        <MoneyPagePictogramDark />
        <OnlineApprovalPictogramDark />
        <ChatBubbleV1PictogramDark />
        <ChatBubbleV2PictogramDark />
        <GDPRPictogramDark />
        <IndustryBuildingsV1PictogramDark />
        <IndustryBuildingsV2PictogramDark />
        <IndustryBuildingsV3PictogramDark />
        <SustainableCyclePictogramDark />

        <PadlockCheckPictogramDark />
        <PadlockShieldPictogramDark />
        <PadlockShieldAndStarsPictogramDark />


        <HandChatBubbleQuestionPictogramDark />
        <HandChatBubbleTextPictogramDark />
        <HandChatBubbleDotsPictogramDark />


        <UploadDocumentSuccessfulPictogramDark />
        <UploadDocumentFailedPictogramDark />
        <UploadDocumentWarningPictogramDark />
        <UploadDocumentPreUploadPictogramDark />


        <UploadImagePreUploadRectanglePictogramDark />
        <UploadImageSuccessfulRectanglePictogramDark />
        <UploadImageWarningRectanglePictogramDark />
        <UploadImageFailedRectanglePictogramDark />
        <UploadImagePreUploadSquarePictogramDark />
        <UploadImageSuccessfulSquarePictogramDark />
        <UploadImageWarningSquarePictogramDark />
        <UploadImageFailedSquarePictogramDark />
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
