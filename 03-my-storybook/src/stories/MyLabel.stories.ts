import type { Meta, StoryObj } from "@storybook/react-vite"
import { MyLabel } from "../components/MyLabel"

const meta = {
  title: "UI/Labels/MyLabel",
  component: MyLabel,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    color: { control: "select" },
    size: { control: "inline-radio" },
  },
} satisfies Meta<typeof MyLabel>

export default meta
type Story = StoryObj<typeof meta>

export const Basic: Story = {
  args: {
    label: "Basic label",
    allCaps: false,
    backgroundColor: "transparent",
    color: undefined,
    fontColor: undefined,
    size: "normal",
  },
}

export const AllCaps: Story = {
  args: {
    allCaps: true,
    label: "All Caps label",
    size: "normal",
  },
}

export const Secondary: Story = {
  args: {
    color: "text-secondary",
    label: "Secondary label",
    size: "normal",
  },
}

export const CustomColor: Story = {
  args: {
    fontColor: "red",
    label: "Custom Color label",
    size: "normal",
  },
}

export const CustomBackgroundColor: Story = {
  args: {
    backgroundColor: "red",
    fontColor: "yellow",
    label: "Custom Background Color label",
    size: "h1",
  },
}
