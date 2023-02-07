import { Meta, moduleMetadata, Story } from '@storybook/angular';
import { MaterialModule } from 'src/app/core/material/material.module';
import { InputComponent } from '../input.component';

export default {
    title: 'Input',
    component: InputComponent,
    decorators: [
        moduleMetadata({
            declarations: [InputComponent],
            imports: [MaterialModule]
        })
    ]
} as Meta;

const Template: Story<InputComponent> = (args: InputComponent) => ({
    component: InputComponent,
    template: `<app-input [label]="label"
    [placeholder]="placeholder"></app-input>`,
    props: {
        label: args.label,
        placeholder: args.placeholder
    }
});

export const Default = Template.bind({});

Default.args = {
    label: 'test',
    placeholder: 'test placeholder'
};
