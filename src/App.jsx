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


import {CreateDocumentPictogram as CreateDocumentPictogramLight} from './components/pictograms/light';
import {CreateDocumentPictogram as CreateDocumentPictogramDark} from './components/pictograms/dark';
import {EmailPictogram as EmailPictogramLight} from './components/pictograms/light';
import {EmailPictogram as EmailPictogramDark} from './components/pictograms/dark';
import {PrintPictogram as PrintPictogramLight} from './components/pictograms/light';
import {PrintPictogram as PrintPictogramDark} from './components/pictograms/dark';
import {SignPictogram as SignPictogramLight} from './components/pictograms/light';
import {SignPictogram as SignPictogramDark} from './components/pictograms/dark';
import {ScanPictogram as ScanPictogramLight} from './components/pictograms/light';
import {ScanPictogram as ScanPictogramDark} from './components/pictograms/dark';
import {PhoneTapPictogram as PhoneTapPictogramLight} from './components/pictograms/light';
import {PhoneTapPictogram as PhoneTapPictogramDark} from './components/pictograms/dark';
import {EditDocumentPictogram as EditDocumentPictogramLight} from './components/pictograms/light';
import {EditDocumentPictogram as EditDocumentPictogramDark} from './components/pictograms/dark';
import {SendDocPictogram as SendDocPictogramLight} from './components/pictograms/light';
import {SendDocPictogram as SendDocPictogramDark} from './components/pictograms/dark';
import {ShareDataPictogram as ShareDataPictogramLight} from './components/pictograms/light';
import {ShareDataPictogram as ShareDataPictogramDark} from './components/pictograms/dark';
import {SignedDocPictogram as SignedDocPictogramLight} from './components/pictograms/light';
import {SignedDocPictogram as SignedDocPictogramDark} from './components/pictograms/dark';
import {SignedDocMultiPictogram as SignedDocMultiPictogramLight} from './components/pictograms/light';
import {SignedDocMultiPictogram as SignedDocMultiPictogramDark} from './components/pictograms/dark';
import {SignerPictogram as SignerPictogramLight} from './components/pictograms/light';
import {SignerPictogram as SignerPictogramDark} from './components/pictograms/dark';
import {UnknownSignerPictogram as UnknownSignerPictogramLight} from './components/pictograms/light';
import {UnknownSignerPictogram as UnknownSignerPictogramDark} from './components/pictograms/dark';
import {ApproverPictogram as ApproverPictogramLight} from './components/pictograms/light';
import {ApproverPictogram as ApproverPictogramDark} from './components/pictograms/dark';


import {AuditPictogram as AuditPictogramLight} from './components/pictograms/light';
import {AuditPictogram as AuditPictogramDark} from './components/pictograms/dark';
import {OnlineSignPictogram as OnlineSignPictogramLight} from './components/pictograms/light';
import {OnlineSignPictogram as OnlineSignPictogramDark} from './components/pictograms/dark';
import {DownloadDocPictogram as DownloadDocPictogramLight} from './components/pictograms/light';
import {DownloadDocPictogram as DownloadDocPictogramDark} from './components/pictograms/dark';
import {TimePictogram as TimePictogramLight} from './components/pictograms/light';
import {TimePictogram as TimePictogramDark} from './components/pictograms/dark';
import {SpeedPictogram as SpeedPictogramLight} from './components/pictograms/light';
import {SpeedPictogram as SpeedPictogramDark} from './components/pictograms/dark';
import {WetlinkPictogram as WetlinkPictogramLight} from './components/pictograms/light';
import {WetlinkPictogram as WetlinkPictogramDark} from './components/pictograms/dark';
import {OnlinePictogram as OnlinePictogramLight} from './components/pictograms/light';
import {OnlinePictogram as OnlinePictogramDark} from './components/pictograms/dark';
import {SecurePictogram as SecurePictogramLight} from './components/pictograms/light';
import {SecurePictogram as SecurePictogramDark} from './components/pictograms/dark';
import {LinkPictogram as LinkPictogramLight} from './components/pictograms/light';
import {LinkPictogram as LinkPictogramDark} from './components/pictograms/dark';
import {SingleDocPictogram as SingleDocPictogramLight} from './components/pictograms/light';
import {SingleDocPictogram as SingleDocPictogramDark} from './components/pictograms/dark';
import {MultiDocsPictogram as MultiDocsPictogramLight} from './components/pictograms/light';
import {MultiDocsPictogram as MultiDocsPictogramDark} from './components/pictograms/dark';
import {DuplicatePictogram as DuplicatePictogramLight} from './components/pictograms/light';
import {DuplicatePictogram as DuplicatePictogramDark} from './components/pictograms/dark';
import {AddPagePictogram as AddPagePictogramLight} from './components/pictograms/light';
import {AddPagePictogram as AddPagePictogramDark} from './components/pictograms/dark';
import {MailStackPictogram as MailStackPictogramLight} from './components/pictograms/light';
import {MailStackPictogram as MailStackPictogramDark} from './components/pictograms/dark';


import {UploadPictogram as UploadPictogramLight} from './components/pictograms/light';
import {UploadPictogram as UploadPictogramDark} from './components/pictograms/dark';
import {DownloadCloudPictogram as DownloadCloudPictogramLight} from './components/pictograms/light';
import {DownloadCloudPictogram as DownloadCloudPictogramDark} from './components/pictograms/dark';
import {LightbulbPictogram as LightbulbPictogramLight} from './components/pictograms/light';
import {LightbulbPictogram as LightbulbPictogramDark} from './components/pictograms/dark';
import {ShieldPictogram as ShieldPictogramLight} from './components/pictograms/light';
import {ShieldPictogram as ShieldPictogramDark} from './components/pictograms/dark';
import {ReloadPagePictogram as ReloadPagePictogramLight} from './components/pictograms/light';
import {ReloadPagePictogram as ReloadPagePictogramDark} from './components/pictograms/dark';
import {SendPagePictogram as SendPagePictogramLight} from './components/pictograms/light';
import {SendPagePictogram as SendPagePictogramDark} from './components/pictograms/dark';
import {FrozenDocPictogram as FrozenDocPictogramLight} from './components/pictograms/light';
import {FrozenDocPictogram as FrozenDocPictogramDark} from './components/pictograms/dark';
import {SearchPictogram as SearchPictogramLight} from './components/pictograms/light';
import {SearchPictogram as SearchPictogramDark} from './components/pictograms/dark';
import {FolderAltPictogram as FolderAltPictogramLight} from './components/pictograms/light';
import {FolderAltPictogram as FolderAltPictogramDark} from './components/pictograms/dark';
import {FolderPictogram as FolderPictogramLight} from './components/pictograms/light';
import {FolderPictogram as FolderPictogramDark} from './components/pictograms/dark';
import {FolderAlt2Pictogram as FolderAlt2PictogramLight} from './components/pictograms/light';
import {FolderAlt2Pictogram as FolderAlt2PictogramDark} from './components/pictograms/dark';
import {FolderAlt3Pictogram as FolderAlt3PictogramLight} from './components/pictograms/light';
import {FolderAlt3Pictogram as FolderAlt3PictogramDark} from './components/pictograms/dark';
import {SettingsPictogram as SettingsPictogramLight} from './components/pictograms/light';
import {SettingsPictogram as SettingsPictogramDark} from './components/pictograms/dark';
import {SettingsAlt2Pictogram as SettingsAlt2PictogramLight} from './components/pictograms/light';
import {SettingsAlt2Pictogram as SettingsAlt2PictogramDark} from './components/pictograms/dark';

import {OnlineSecurityPictogram as OnlineSecurityPictogramLight} from './components/pictograms/light';
import {OnlineSecurityPictogram as OnlineSecurityPictogramDark} from './components/pictograms/dark';
import {DiamondPictogram as DiamondPictogramLight} from './components/pictograms/light';
import {DiamondPictogram as DiamondPictogramDark} from './components/pictograms/dark';
import {OverviewPictogram as OverviewPictogramLight} from './components/pictograms/light';
import {OverviewPictogram as OverviewPictogramDark} from './components/pictograms/dark';
import {SecureV1Pictogram as SecureV1PictogramLight} from './components/pictograms/light';
import {SecureV1Pictogram as SecureV1PictogramDark} from './components/pictograms/dark';
import {PageCogPictogram as PageCogPictogramLight} from './components/pictograms/light';
import {PageCogPictogram as PageCogPictogramDark} from './components/pictograms/dark';
import {HandGlobePictogram as HandGlobePictogramLight} from './components/pictograms/light';
import {HandGlobePictogram as HandGlobePictogramDark} from './components/pictograms/dark';
import {HandDocumentPictogram as HandDocumentPictogramLight} from './components/pictograms/light';
import {HandDocumentPictogram as HandDocumentPictogramDark} from './components/pictograms/dark';

import {MoneyCheckBoxesPictogram as MoneyCheckBoxesPictogramLight} from './components/pictograms/light';
import {MoneyCheckBoxesPictogram as MoneyCheckBoxesPictogramDark} from './components/pictograms/dark';
import {MoneyLineGraphV2Pictogram as MoneyLineGraphV2PictogramLight} from './components/pictograms/light';
import {MoneyLineGraphV2Pictogram as MoneyLineGraphV2PictogramDark} from './components/pictograms/dark';
import {MoneyLineGraphV1Pictogram as MoneyLineGraphV1PictogramLight} from './components/pictograms/light';
import {MoneyLineGraphV1Pictogram as MoneyLineGraphV1PictogramDark} from './components/pictograms/dark';
import {MoneyBarChartPictogram as MoneyBarChartPictogramLight} from './components/pictograms/light';
import {MoneyBarChartPictogram as MoneyBarChartPictogramDark} from './components/pictograms/dark';
import {EconomicGrowthPictogram as EconomicGrowthPictogramLight} from './components/pictograms/light';
import {EconomicGrowthPictogram as EconomicGrowthPictogramDark} from './components/pictograms/dark';
import {HandMoneyPictogram as HandMoneyPictogramLight} from './components/pictograms/light';
import {HandMoneyPictogram as HandMoneyPictogramDark} from './components/pictograms/dark';
import {SustainablePageV2Pictogram as SustainablePageV2PictogramLight} from './components/pictograms/light';
import {SustainablePageV2Pictogram as SustainablePageV2PictogramDark} from './components/pictograms/dark';
import {DocumentConnectPictogram as DocumentConnectPictogramLight} from './components/pictograms/light';
import {DocumentConnectPictogram as DocumentConnectPictogramDark} from './components/pictograms/dark';
import {SustainablePageV1Pictogram as SustainablePageV1PictogramLight} from './components/pictograms/light';
import {SustainablePageV1Pictogram as SustainablePageV1PictogramDark} from './components/pictograms/dark';
import {SustainableLightbulbPictogram as SustainableLightbulbPictogramLight} from './components/pictograms/light';
import {SustainableLightbulbPictogram as SustainableLightbulbPictogramDark} from './components/pictograms/dark';

import {MoneyPagePictogram as MoneyPagePictogramLight} from './components/pictograms/light';
import {MoneyPagePictogram as MoneyPagePictogramDark} from './components/pictograms/dark';
import {OnlineApprovalPictogram as OnlineApprovalPictogramLight} from './components/pictograms/light';
import {OnlineApprovalPictogram as OnlineApprovalPictogramDark} from './components/pictograms/dark';
import {ChatBubbleV1Pictogram as ChatBubbleV1PictogramLight} from './components/pictograms/light';
import {ChatBubbleV1Pictogram as ChatBubbleV1PictogramDark} from './components/pictograms/dark';
import {ChatBubbleV2Pictogram as ChatBubbleV2PictogramLight} from './components/pictograms/light';
import {ChatBubbleV2Pictogram as ChatBubbleV2PictogramDark} from './components/pictograms/dark';
import {GDPRPictogram as GDPRPictogramLight} from './components/pictograms/light';
import {GDPRPictogram as GDPRPictogramDark} from './components/pictograms/dark';
import {IndustryBuildingsV1Pictogram as IndustryBuildingsV1PictogramLight} from './components/pictograms/light';
import {IndustryBuildingsV1Pictogram as IndustryBuildingsV1PictogramDark} from './components/pictograms/dark';
import {IndustryBuildingsV2Pictogram as IndustryBuildingsV2PictogramLight} from './components/pictograms/light';
import {IndustryBuildingsV2Pictogram as IndustryBuildingsV2PictogramDark} from './components/pictograms/dark';
import {IndustryBuildingsV3Pictogram as IndustryBuildingsV3PictogramLight} from './components/pictograms/light';
import {IndustryBuildingsV3Pictogram as IndustryBuildingsV3PictogramDark} from './components/pictograms/dark';
import {SustainableCyclePictogram as SustainableCyclePictogramLight} from './components/pictograms/light';
import {SustainableCyclePictogram as SustainableCyclePictogramDark} from './components/pictograms/dark';

import {PadlockCheckPictogram as PadlockCheckPictogramLight} from './components/pictograms/light';
import {PadlockCheckPictogram as PadlockCheckPictogramDark} from './components/pictograms/dark';
import {PadlockShieldPictogram as PadlockShieldPictogramLight} from './components/pictograms/light';
import {PadlockShieldPictogram as PadlockShieldPictogramDark} from './components/pictograms/dark';
import {PadlockShieldAndStarsPictogram as PadlockShieldAndStarsPictogramLight} from './components/pictograms/light';
import {PadlockShieldAndStarsPictogram as PadlockShieldAndStarsPictogramDark} from './components/pictograms/dark';

import {HandChatBubbleQuestionPictogram as HandChatBubbleQuestionPictogramLight} from './components/pictograms/light';
import {HandChatBubbleQuestionPictogram as HandChatBubbleQuestionPictogramDark} from './components/pictograms/dark';
import {HandChatBubbleTextPictogram as HandChatBubbleTextPictogramLight} from './components/pictograms/light';
import {HandChatBubbleTextPictogram as HandChatBubbleTextPictogramDark} from './components/pictograms/dark';
import {HandChatBubbleDotsPictogram as HandChatBubbleDotsPictogramLight} from './components/pictograms/light';
import {HandChatBubbleDotsPictogram as HandChatBubbleDotsPictogramDark} from './components/pictograms/dark';

import {UploadDocumentSuccessfulPictogram as UploadDocumentSuccessfulPictogramLight} from './components/pictograms/light';
import {UploadDocumentSuccessfulPictogram as UploadDocumentSuccessfulPictogramDark} from './components/pictograms/dark';
import {UploadDocumentFailedPictogram as UploadDocumentFailedPictogramLight} from './components/pictograms/light';
import {UploadDocumentFailedPictogram as UploadDocumentFailedPictogramDark} from './components/pictograms/dark';
import {UploadDocumentWarningPictogram as UploadDocumentWarningPictogramLight} from './components/pictograms/light';
import {UploadDocumentWarningPictogram as UploadDocumentWarningPictogramDark} from './components/pictograms/dark';
import {UploadDocumentPreUploadPictogram as UploadDocumentPreUploadPictogramLight} from './components/pictograms/light';
import {UploadDocumentPreUploadPictogram as UploadDocumentPreUploadPictogramDark} from './components/pictograms/dark';

import {UploadImagePreUploadRectanglePictogram as UploadImagePreUploadRectanglePictogramLight} from './components/pictograms/light';
import {UploadImagePreUploadRectanglePictogram as UploadImagePreUploadRectanglePictogramDark} from './components/pictograms/dark';
import {UploadImageSuccessfulRectanglePictogram as UploadImageSuccessfulRectanglePictogramLight} from './components/pictograms/light';
import {UploadImageSuccessfulRectanglePictogram as UploadImageSuccessfulRectanglePictogramDark} from './components/pictograms/dark';
import {UploadImageWarningRectanglePictogram as UploadImageWarningRectanglePictogramLight} from './components/pictograms/light';
import {UploadImageWarningRectanglePictogram as UploadImageWarningRectanglePictogramDark} from './components/pictograms/dark';
import {UploadImageFailedRectanglePictogram as UploadImageFailedRectanglePictogramLight} from './components/pictograms/light';
import {UploadImageFailedRectanglePictogram as UploadImageFailedRectanglePictogramDark} from './components/pictograms/dark';
import {UploadImagePreUploadSquarePictogram as UploadImagePreUploadSquarePictogramLight} from './components/pictograms/light';
import {UploadImagePreUploadSquarePictogram as UploadImagePreUploadSquarePictogramDark} from './components/pictograms/dark';
import {UploadImageSuccessfulSquarePictogram as UploadImageSuccessfulSquarePictogramLight} from './components/pictograms/light';
import {UploadImageSuccessfulSquarePictogram as UploadImageSuccessfulSquarePictogramDark} from './components/pictograms/dark';
import {UploadImageWarningSquarePictogram as UploadImageWarningSquarePictogramLight} from './components/pictograms/light';
import {UploadImageWarningSquarePictogram as UploadImageWarningSquarePictogramDark} from './components/pictograms/dark';
import {UploadImageFailedSquarePictogram as UploadImageFailedSquarePictogramLight} from './components/pictograms/light';
import {UploadImageFailedSquarePictogram as UploadImageFailedSquarePictogramDark} from './components/pictograms/dark';

function App() {
  return (
    <div className="App md:m-40 m-0">
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

      <div className='flex flex-wrap justify-evenly m-5 p-5 bg-black'>

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
