import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

import { Button } from "."

describe("Button component", () => {
  it("should render button with children", () => {
    const children = "Click me"
    render(<Button>{children}</Button>)

    screen.getByText(children)
  })

  it("should apply disabled style when button disabled", () => {
    render(<Button disabled={true}>Click me</Button>)

    const buttonElement = screen.getByTestId("button-component")
    
    expect(buttonElement).toHaveAttribute("disabled")
    expect(buttonElement).toBeDisabled()
  })

  it("should shows a loading indicator when isLoading is true", () => {
    render(<Button isLoading={true}>Click me</Button>)

    const loadingElement = screen.getByTestId("loading-component");

    expect(loadingElement).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: "Click me" })).not.toBeInTheDocument()
  })
})