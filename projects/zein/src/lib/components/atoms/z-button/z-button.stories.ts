import { Meta, StoryObj } from '@storybook/angular';
import { ZButtonComponent } from './z-button.component';

const meta: Meta<ZButtonComponent> = {
  title: 'Atoms/Z-Button',
  component: ZButtonComponent,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'neutral'],
    },
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'ghost', 'link', 'flat'],
    },
    shape: {
      control: 'select',
      options: ['rounded', 'square', 'pill'],
    },
    iconPosition: {
      control: 'radio',
      options: ['left', 'right'],
    },
    theme: {
      control: 'radio',
      options: ['auto', 'light', 'dark'],
    },
    type: {
      control: 'radio',
      options: ['button', 'submit', 'reset'],
    },
    iconOnly: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    toggleable: {
      control: 'boolean',
    },
    toggledOn: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    icon: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<ZButtonComponent>;

export const Default: Story = {
  args: {
    label: 'Click Me',
    size: 'md',
    color: 'primary',
    variant: 'solid',
    shape: 'rounded',
    theme: 'auto',
    iconOnly: false,
    fullWidth: false,
    disabled: false,
    loading: false,
    toggleable: false,
    toggledOn: false,
    icon: '',
    iconPosition: 'left',
  },
};

export const IconOnly: Story = {
  args: {
    ...Default.args,
    icon: 'fa fa-star',
    iconOnly: true,
    label: '', // optional if iconOnly true
  },
};

export const Toggled: Story = {
  args: {
    ...Default.args,
    toggleable: true,
    toggledOn: true,
    label: 'Toggled',
  },
};

export const Loading: Story = {
  args: {
    ...Default.args,
    loading: true,
    label: 'Loading...',
  },
};

export const PillDark: Story = {
  args: {
    ...Default.args,
    shape: 'pill',
    theme: 'dark',
    label: 'Dark Theme',
    color: 'secondary',
  },
};