import React from 'react';
import renderer from 'react-test-renderer';
import { CreateDocument as CreateDocumentLight } from './components/pictograms/light/CreateDocument';

import { Email as EmailLight } from '../light/Email';
import { Print as PrintLight } from '../light/Print';
import { Sign as SignLight } from '../light/Sign';
import { Scan as ScanLight } from '../light/Scan';
import { PhoneTap as PhoneTapLight } from '../light/PhoneTap';
import { EditDocument as EditDocumentLight } from '../light/EditDocument';
import { SendDoc as SendDocLight } from '../light/SendDoc';
import { ShareData as ShareDataLight } from '../light/ShareData';
import { SignedDoc as SignedDocLight } from '../light/SignedDoc';
import { SignedDocMulti as SignedDocMultiLight } from '../light/SignedDocMulti';
import { Signer as SignerLight } from '../light/Signer';
import { UnknownSigner as UnknownSignerLight } from '../light/UnknownSigner';
import { Approver as ApproverLight } from '../light/Approver';

import { Audit as AuditLight } from './components/pictograms/light/Audit';
import { OnlineSign as OnlineSignLight } from './components/pictograms/light/OnlineSign';
import { DownloadDoc as DownloadDocLight } from './components/pictograms/light/DownloadDoc';
import { Time as TimeLight } from './components/pictograms/light/Time';
import { Speed as SpeedLight } from './components/pictograms/light/Speed';
import { Wetlink as WetlinkLight } from './components/pictograms/light/Wetlink';
import { Online as OnlineLight } from './components/pictograms/light/Online';
import { Secure as SecureLight } from './components/pictograms/light/Secure';
import { Link as LinkLight } from './components/pictograms/light/Link';
import { SingleDoc as SingleDocLight } from './components/pictograms/light/SingleDoc';
import { MultiDocs as MultiDocsLight } from './components/pictograms/light/MultiDocs';
import { Duplicate as DuplicateLight } from './components/pictograms/light/Duplicate';
import { AddPage as AddPageLight } from './components/pictograms/light/AddPage';
import { MailStack as MailStackLight } from './components/pictograms/light/MailStack';

import { UploadPictogram as UploadPictogramLight } from './components/pictograms/light/UploadPictogram';
import { DownloadCloud as DownloadCloudLight } from './components/pictograms/light/DownloadCloud';
import { Lightbulb as LightbulbLight } from './components/pictograms/light/Lightbulb';
import { Shield as ShieldLight } from './components/pictograms/light/Shield';
import { ReloadPage as ReloadPageLight } from './components/pictograms/light/ReloadPage';
import { SendPage as SendPageLight } from './components/pictograms/light/SendPage';
import { FrozenDoc as FrozenDocLight } from './components/pictograms/light/FrozenDoc';
import { Search as SearchLight } from './components/pictograms/light/Search';
import { FolderAlt as FolderAltLight } from './components/pictograms/light/FolderAlt';
import { Folder as FolderLight } from './components/pictograms/light/Folder';
import { FolderAlt2 as FolderAlt2Light } from './components/pictograms/light/FolderAlt2';
import { FolderAlt3 as FolderAlt3Light } from './components/pictograms/light/FolderAlt3';
import { Settings as SettingsLight } from './components/pictograms/light/Settings';
import { SettingsAlt2 as SettingsAlt2Light } from './components/pictograms/light/SettingsAlt2';
import { OnlineSecurity as OnlineSecurityLight } from './components/pictograms/light/OnlineSecurity';
import { Diamond as DiamondLight } from './components/pictograms/light/Diamond';
import { Overview as OverviewLight } from './components/pictograms/light/Overview';
import { SecureV1 as SecureV1Light } from './components/pictograms/light/SecureV1';
import { PageCog as PageCogLight } from './components/pictograms/light/PageCog';
import { HandGlobe as HandGlobeLight } from './components/pictograms/light/HandGlobe';
import { HandDocument as HandDocumentLight } from './components/pictograms/light/HandDocument';

import { MoneyCheckBoxes as MoneyCheckBoxesLight } from './components/pictograms/light/MoneyCheckBoxes';
import { MoneyLineGraphV2 as MoneyLineGraphV2Light } from './components/pictograms/light/MoneyLineGraphV2';
import { MoneyLineGraphV1 as MoneyLineGraphV1Light } from './components/pictograms/light/MoneyLineGraphV1';
import { MoneyBarChart as MoneyBarChartLight } from './components/pictograms/light/MoneyBarChart';
import { EconomicGrowth as EconomicGrowthLight } from './components/pictograms/light/EconomicGrowth';
import { HandMoney as HandMoneyLight } from './components/pictograms/light/HandMoney';
import { SustainablePageV2 as SustainablePageV2Light } from './components/pictograms/light/SustainablePageV2';
import { DocumentConnect as DocumentConnectLight } from './components/pictograms/light/DocumentConnect';
import { SustainablePageV1 as SustainablePageV1Light } from './components/pictograms/light/SustainablePageV1';
import { SustainableLightbulb as SustainableLightbulbLight } from './components/pictograms/light/SustainableLightbulb';
import { MoneyPage as MoneyPageLight } from './components/pictograms/light/MoneyPage';
import { OnlineApproval as OnlineApprovalLight } from './components/pictograms/light/OnlineApproval';
import { ChatBubbleV1 as ChatBubbleV1Light } from './components/pictograms/light/ChatBubbleV1';
import { ChatBubbleV2 as ChatBubbleV2Light } from './components/pictograms/light/ChatBubbleV2';
import { GDPR as GDPRLight } from './components/pictograms/light/GDPR';
import { IndustryBuildingsV1 as IndustryBuildingsV1Light } from './components/pictograms/light/IndustryBuildingsV1';
import { IndustryBuildingsV2 as IndustryBuildingsV2Light } from './components/pictograms/light/IndustryBuildingsV2';
import { IndustryBuildingsV3 as IndustryBuildingsV3Light } from './components/pictograms/light/IndustryBuildingsV3';
import { SustainableCycle as SustainableCycleLight } from './components/pictograms/light/SustainableCycle';

import { PadlockCheck as PadlockCheckLight } from './components/pictograms/light/PadlockCheck';
import { PadlockShield as PadlockShieldLight } from './components/pictograms/light/PadlockShield';
import { PadlockShieldAndStars as PadlockShieldAndStarsLight } from './components/pictograms/light/PadlockShieldAndStars';

import { HandChatBubbleQuestion as HandChatBubbleQuestionLight } from './components/pictograms/light/HandChatBubbleQuestion';
import { HandChatBubbleText as HandChatBubbleTextLight } from './components/pictograms/light/HandChatBubbleText';
import { HandChatBubbleDots as HandChatBubbleDotsLight } from './components/pictograms/light/HandChatBubbleDots';

import { UploadDocumentSuccessful as UploadDocumentSuccessfulLight } from './components/pictograms/light/UploadDocumentSuccessful';
import { UploadDocumentFailed as UploadDocumentFailedLight } from './components/pictograms/light/UploadDocumentFailed';
import { UploadDocumentWarning as UploadDocumentWarningLight } from './components/pictograms/light/UploadDocumentWarning';
import { UploadDocumentPreUpload as UploadDocumentPreUploadLight } from './components/pictograms/light/UploadDocumentPreUpload';

import { UploadImagePreUploadRectangle as UploadImagePreUploadRectangleLight } from './components/pictograms/light/UploadImagePreUploadRectangle';
import { UploadImageSuccessfulRectangle as UploadImageSuccessfulRectangleLight } from './components/pictograms/light/UploadImageSuccessfulRectangle';
import { UploadImageWarningRectangle as UploadImageWarningRectangleLight } from './components/pictograms/light/UploadImageWarningRectangle';
import { UploadImageFailedRectangle as UploadImageFailedRectangleLight } from './components/pictograms/light/UploadImageFailedRectangle';
import { UploadImagePreUploadSquare as UploadImagePreUploadSquareLight } from './components/pictograms/light/UploadImagePreUploadSquare';
import { UploadImageSuccessfulSquare as UploadImageSuccessfulSquareLight } from './components/pictograms/light/UploadImageSuccessfulSquare';
import { UploadImageWarningSquare as UploadImageWarningSquareLight } from './components/pictograms/light/UploadImageWarningSquare';
import { UploadImageFailedSquare as UploadImageFailedSquareLight } from './components/pictograms/light/UploadImageFailedSquare';

it('should render email', () => {
  const component = renderer.create(
    <EmailLight />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
it('should render email', () => {
  const component = renderer.create(
    <PrintLight />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
it('should render email', () => {
  const component = renderer.create(
    <SignLight />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
it('should render email', () => {
  const component = renderer.create(
    <ScanLight />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
it('should render email', () => {
  const component = renderer.create(
    <PhoneTapLight />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
