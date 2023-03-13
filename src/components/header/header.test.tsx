import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Header from "./header.component";

test("To have main header", () => {
    render(
        <MemoryRouter initialEntries={["/"]}>
            <Header />
        </MemoryRouter>
    );

    expect(screen.getByRole("heading", { name: /catharsis/i })).toBeInTheDocument();
});
