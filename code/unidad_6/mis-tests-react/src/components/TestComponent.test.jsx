import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import DemoComponent from "./TestComponent";

// Agrupa todas las pruebas relacionadas con el componente
describe('Componente DemoComponent', () => {

	test("getByText + toBeInTheDocument", () => {
		render(<DemoComponent />);
		expect(screen.getByText("Toggle")).toBeInTheDocument();
	});

	test("getByRole + toBeInTheDocument", () => {
		render(<DemoComponent />);
		expect(screen.getByRole("button", { name: "Toggle" })).toBeInTheDocument();
	});

	test("getByPlaceholderText", () => {
		render(<DemoComponent />);
		expect(screen.getByPlaceholderText("Nombre")).toBeInTheDocument();
	});

	test("getByRole + toBeDisabled", () => {
		render(<DemoComponent />);
		expect(screen.getByRole("button", { name: "Guardar" })).toBeDisabled();
	});

	test("getByRole + not.toHaveClass", () => {
		render(<DemoComponent />);
		expect(screen.getByRole("button", { name: "Toggle" })).not.toHaveClass("active");
	});
	
	test("click + getByText", () => {
		render(<DemoComponent />);
		fireEvent.click(screen.getByText("Toggle"));
		expect(screen.getByText("Hola Mundo")).toBeInTheDocument();
	});

	test("click + toHaveClass", () => {
		render(<DemoComponent />);
		fireEvent.click(screen.getByText("Toggle"));
  		expect(screen.getByText("Toggle")).toHaveClass("active");
	});

	test("change + toHaveValue", () => {
		render(<DemoComponent />);
		fireEvent.change(screen.getByPlaceholderText("Nombre"),{ target: { value: "Carlos" } });
		expect(screen.getByPlaceholderText("Nombre")).toHaveValue("Carlos");
	});
	
	test("change + not.toBeDisabled", () => {
		render(<DemoComponent />);
  		fireEvent.change(screen.getByPlaceholderText("Nombre"),{ target: { value: "Ana" } });
		expect(screen.getByRole("button", { name: "Guardar" })).not.toBeDisabled();
	});

	test("click dos veces", () => {
		render(<DemoComponent />);
		const btn = screen.getByText("Toggle");
		fireEvent.click(btn);
		fireEvent.click(btn);
		expect(screen.queryByText("Hola Mundo")).not.toBeInTheDocument();
	});



	test("queryByText inexistente", () => {
		render(<DemoComponent />);
		expect(screen.queryByText("Error")).not.toBeInTheDocument();
	});
	
	test("queryByText antes de click", () => {
		render(<DemoComponent />);
		expect(screen.queryByText("Hola Mundo")).not.toBeInTheDocument();
	});
	
	test("queryByText después de click", () => {
		render(<DemoComponent />);
		fireEvent.click(screen.getByText("Toggle"));
		expect(screen.queryByText("Hola Mundo")).toBeInTheDocument();
	});

	test("queryByText después de ocultar", () => {
		render(<DemoComponent />);
		const btn = screen.getByText("Toggle");
		fireEvent.click(btn);
		fireEvent.click(btn);
		expect(screen.queryByText("Hola Mundo")).not.toBeInTheDocument();
	});

	test("queryByText + not", () => {
		render(<DemoComponent />);
		expect(screen.queryByText("Cargando")).not.toBeInTheDocument();
	});

	test("queryByText + click", () => {
		render(<DemoComponent />);
		fireEvent.click(screen.getByText("Toggle"));
		expect(screen.queryByText("Hola Mundo")).toBeInTheDocument();
	});
	
	test("queryByText + change", () => {
		render(<DemoComponent />);
		fireEvent.change(screen.getByPlaceholderText("Nombre"),{ target: { value: "Luis" } });
		expect(screen.queryByText("Hola Mundo")).not.toBeInTheDocument();
	});

	test("queryByText + disabled", () => {
		render(<DemoComponent />);
		expect(screen.queryByText("Guardar")).toBeInTheDocument();
	});

	test("queryByText visible", () => {
		render(<DemoComponent />);
		fireEvent.click(screen.getByText("Toggle"));
		expect(screen.queryByText("Hola Mundo")).toBeInTheDocument();
	});

	test("queryByText visible", () => {
		render(<DemoComponent />);
		fireEvent.click(screen.getByText("Toggle"));
		expect(screen.queryByText("Hola Mundo")).toBeInTheDocument();
	});



	test("findByText", async () => {
		render(<DemoComponent />);
		expect(await screen.findByText("Datos cargados")).toBeInTheDocument();
	});
	
	test("findByText + not.toHaveClass", async () => {
		render(<DemoComponent />);
		const span = await screen.findByText("Datos cargados");
  		expect(span).not.toHaveClass("error");
	});

	test("findByText + click", async () => {
		render(<DemoComponent />);
		fireEvent.click(screen.getByText("Toggle"));
		expect(await screen.findByText("Datos cargados")).toBeInTheDocument();
	});

	test("findByText + change", async () => {
		render(<DemoComponent />);
		fireEvent.change(screen.getByPlaceholderText("Nombre"),{ target: { value: "Pedro" } });
		expect(await screen.findByText("Datos cargados")).toBeInTheDocument();
	});

	test("findByText + toBeInTheDocument", async () => {
		render(<DemoComponent />);
		const el = await screen.findByText("Datos cargados");
		expect(el).toBeInTheDocument();
	});

	test("findByText + not", async () => {
		render(<DemoComponent />);
		const el = await screen.findByText("Datos cargados");
		expect(el).not.toHaveClass("hidden");
	});

	test("findByText después de click", async () => {
		render(<DemoComponent />);
		fireEvent.click(screen.getByText("Toggle"));
		expect(await screen.findByText("Datos cargados")).toBeInTheDocument();
	});

	test("findByText + botón activo", async () => {
		render(<DemoComponent />);
		fireEvent.click(screen.getByText("Toggle"));
		await screen.findByText("Datos cargados");
		expect(screen.getByText("Toggle")).toHaveClass("active");
	});

	test("findByText + input value", async () => {
		render(<DemoComponent />);
		fireEvent.change(screen.getByPlaceholderText("Nombre"),{ target: { value: "Juan" } });
		await screen.findByText("Datos cargados");
		expect(screen.getByPlaceholderText("Nombre")).toHaveValue("Juan");
	});

	test("findByText + botón habilitado", async () => {
		render(<DemoComponent />);
		fireEvent.change(screen.getByPlaceholderText("Nombre"),{ target: { value: "Maria" } });
		await screen.findByText("Datos cargados");
		expect(screen.getByRole("button", { name: "Guardar" })).not.toBeDisabled();
	});
	
});
