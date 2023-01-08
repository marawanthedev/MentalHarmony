import React from "react";
import { screen, render, within } from "@testing-library/react";
import StickyHeadTable from "./StickyHeadTable";

describe("Sticky head table is working properly", () => {
  const title = "sticky-title";
  const rows: any = [
    {
      name: "marwan",
      speciality: "doctor",
    },
    {
      name: "mostafa",
      speciality: "engineer",
    },
  ];
  const cols: any = [
    {
      id: "name",
      label: "details",
      minWidth: 100,
    },
    {
      id: "speciality",
      label: "speciality",
      minWidth: 120,
    },
  ];

  //   { id: "name", label: "Details", minWidth: 100 },

  const renderComponent = () =>
    render(
      <StickyHeadTable rows={rows} cols={cols} blur={true} title={title} />
    );

  test("Cols are rendered properly", () => {
    renderComponent();
    const colsEl = screen.getAllByTitle(`${title}-col`);

    colsEl.forEach((col, index: number) => {
      // to ensure that label passed value and text content are same
      expect(col.textContent).toBe(cols[index].label);
    });
  });
  test("Rows  are rendered properly", () => {
    renderComponent();
    const rowsEl = screen.getAllByTitle(`${title}-row`);

    rowsEl.forEach((row, index: number) => {
      const rowCells = within(row).getAllByTitle(`${title}-cell`);
      const expectedRow = rows[index];

      //   ensuring that each row values are mapped accordingly
      Object.keys(expectedRow).map((key, _index) => {
        // to ensure that we are comparing respective keys to value
        if (_index === index) {
          expect(expectedRow[key]).toBe(rowCells[index].textContent);
        }
      });
    });
  });
});
