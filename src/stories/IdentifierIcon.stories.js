import { InformationCircleIcon } from '@heroicons/react/outline'

import { IdentifierIcon } from './IdentifierIcon';

export default {
  title: "IdentifierIcon",
  component: IdentifierIcon,
};

const Template = (args) => <IdentifierIcon {...args} />;

export const Green = Template.bind({})

Green.args = {
	color: "green",
    size: "lg",
    Icon: {InformationCircleIcon}
}


