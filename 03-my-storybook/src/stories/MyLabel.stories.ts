import type { Meta, StoryObj } from "@storybook/react-vite"
import { MyLabel } from "../components/MyLabel"

const meta = {
  title: "UI/Labels/MyLabel",
  component: MyLabel,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    size: { control: "inline-radio" },
  },
} satisfies Meta<typeof MyLabel>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    label: "Basic label",
    size: "normal",
  },
}

export const AllCaps: Story = {
  args: {
    label: "All Caps label",
    size: "normal",
  },
}

export const Secondary: Story = {
  args: {
    label: "Secondary label",
    size: "normal",
  },
}

export const CustomColor: Story = {
  args: {
    label: "Custom Color label",
    size: "normal",
  },
}
