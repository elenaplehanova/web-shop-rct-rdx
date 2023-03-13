import userEvent from "@testing-library/user-event";
import { render } from "@testing-library/react";
import AboutPage from "./about-page.component";
import { BrowserRouter } from "react-router-dom";
import Header from "../../components/header/header.component";

test("Navigaiting to about", async () => {
    const { getByText } = render(
        <>
            <Header />
            <AboutPage />
        </>,

        { wrapper: BrowserRouter }
    );
    const user = userEvent.setup();
    await user.click(getByText("О нас"));
    expect(getByText(/о cartharsis/i)).toBeInTheDocument();
});
