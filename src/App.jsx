import React, { useState, useEffect } from "react";
import DragAndDrop from "./components/DragAndDrop";
import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";

const App = () => {
  const [checked, setChecked] = useState(false);

  return (
    <>
      <section className="w-full max-w-[1280px] mx-auto px-4 py-6">
        <div className="flex gap-3 mb-4">
          <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <label htmlFor="checkbox" className="uppercase">
            No realizado
          </label>
        </div>

        {checked && (
          <>
            <div className="grid grid-cols-2 gap-5 max-sm:grid-cols-1">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-3">
                  <h2>Motivo y Sustento</h2>
                  <textarea
                    name="motivo"
                    id="motivo"
                    cols="30"
                    rows={5}
                    className="w-full p-3 bg-gray-100 text-black"
                  ></textarea>
                </div>

                <div className="flex flex-col gap-3">
                  <h3>Descripcion</h3>
                  <textarea
                    name="descripcion"
                    id="descripcion"
                    cols="30"
                    rows={10}
                    className="w-full p-3 bg-gray-100 text-black"
                  ></textarea>
                </div>
              </div>

              <div>
                <DragAndDrop />
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <h3>Conclusion</h3>
              <div className="flex w-full flex-col">
                <Tabs aria-label="Options" radius="none" color="primary">
                  <Tab key="pending" title="Pendiente" radius="none">
                    <Card radius="none">
                      <textarea
                        name="subjectPending"
                        id="subjectPending"
                        cols="30"
                        rows={5}
                        className="w-full p-3 bg-gray-100 text-black"
                      ></textarea>
                    </Card>
                  </Tab>
                  <Tab key="normal" title="Normal">
                    <Card radius="none">
                      <textarea
                        name="subjectPending"
                        id="subjectPending"
                        cols="30"
                        rows={5}
                        className="w-full p-3 bg-gray-100 text-black"
                      ></textarea>
                    </Card>
                  </Tab>
                  <Tab key="trouble" title="Alterado">
                    <Card radius="none">
                      <textarea
                        name="subjectPending"
                        id="subjectPending"
                        cols="30"
                        rows={5}
                        className="w-full p-3 bg-gray-100 text-black"
                      ></textarea>
                    </Card>
                  </Tab>
                </Tabs>
              </div>
            </div>
          </>
        )}
      </section>
    </>
  );
};

export default App;
