import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { FormsModule } from '@angular/forms';
import { ZInputComponent } from './z-input.component';

const meta: Meta<ZInputComponent> = {
  title: 'Atoms/Z-Input',
  component: ZInputComponent,
  decorators: [
    moduleMetadata({
      imports: [FormsModule],
    }),
  ],
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'search'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    shape: {
      control: 'select',
      options: ['rounded', 'square', 'pill'],
    },
    icon: {
      control: 'text',
    },
    fullWidth: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
    readonly: {
      control: 'boolean',
    },
    error: {
      control: 'text',
    },
    label: {
      control: 'text',
    },
    placeholder: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<ZInputComponent>;

export const Default: Story = {
  name: 'Default',
  args: {
    label: 'Username',
    placeholder: 'Enter your name',
    type: 'text',
    size: 'md',
    shape:'pill',
    icon: '',
    fullWidth: false,
    disabled: false,
    readonly: false,
    error: '',
  },
};

export const WithIcon: Story = {
  name: 'With Icon',
  args: {
    ...Default.args,
    icon: 'fa fa-user',
    label: 'User',
    placeholder: 'Enter your username',
  },
};

export const Password: Story = {
  name: 'Password Type',
  args: {
    ...Default.args,
    type: 'password',
    label: 'Password',
    placeholder: 'Enter password',
    icon: 'fa fa-lock',
  },
};

export const Email: Story = {
  name: 'Email Type',
  args: {
    ...Default.args,
    type: 'email',
    label: 'Email Address',
    placeholder: 'user@example.com',
    icon: 'fa fa-envelope',
  },
};

export const Disabled: Story = {
  name: 'Disabled Input',
  args: {
    ...Default.args,
    label: 'Username',
    placeholder: 'Disabled',
    disabled: true,
  },
};

export const Readonly: Story = {
  name: 'Readonly Input',
  args: {
    ...Default.args,
    label: 'Role',
    placeholder: 'Admin',
    readonly: true,
  },
};

export const Error: Story = {
  name: 'Input with Error',
  args: {
    ...Default.args,
    label: 'Email',
    placeholder: 'Enter email',
    type: 'email',
    error: 'Invalid email address',
  },
};

export const FullWidth: Story = {
  name: 'Full Width Input',
  args: {
    ...Default.args,
    label: 'Search',
    placeholder: 'Search something...',
    fullWidth: true,
    icon: 'fa fa-search',
  },
};

export const Sizes: Story = {
  name: 'All Sizes',
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
        <z-input label="Extra Small" placeholder="XS" size="xs"></z-input>
        <z-input label="Small" placeholder="SM" size="sm"></z-input>
        <z-input label="Medium" placeholder="MD" size="md"></z-input>
        <z-input label="Large" placeholder="LG" size="lg"></z-input>
        <z-input label="Extra Large" placeholder="XL" size="xl"></z-input>
      </div>
    `,
  }),
};
