import { Meta, StoryObj } from '@storybook/angular';
import { ZButtonComponent } from './z-button.component';
import { moduleMetadata } from '@storybook/angular';

const meta: Meta<ZButtonComponent> = {
  title: 'Components/Atoms/Z-Button',
  component: ZButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [], // Add any shared modules if needed
    }),
  ],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'danger', 'success', 'warning', 'neutral'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost', 'link', 'flat'],
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
    },
  },
  args: {
    label: 'Click Me',
    size: 'md',
    color: 'primary',
    variant: 'solid',
    disabled: false,
    fullWidth: false,
    loading: false,
  },
};

export default meta;
type Story = StoryObj<ZButtonComponent>;

export const Primary: Story = {
  args: {
    label: 'Primary Button',
    color: 'primary',
    variant: 'solid',
  },
};

export const Outline: Story = {
  args: {
    label: 'Outline Button',
    color: 'primary',
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    label: 'Ghost Button',
    color: 'secondary',
    variant: 'ghost',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Button',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    label: 'Loading...',
    loading: true,
  },
};

export const WithIconLeft: Story = {
  args: {
    label: 'Save',
    icon: 'fa fa-save',
    iconPosition: 'left',
  },
};

export const WithIconRight: Story = {
  args: {
    label: 'Next',
    icon: 'fa fa-arrow-right',
    iconPosition: 'right',
  },
};

export const FullWidth: Story = {
  args: {
    label: 'Full Width',
    fullWidth: true,
  },
};