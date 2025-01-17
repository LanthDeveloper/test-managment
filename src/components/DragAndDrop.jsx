import { Button } from "@nextui-org/react";
import React, { useState, useEffect, useCallback } from "react";

import { useDropzone } from "react-dropzone";

const DragAndDrop = () => {
  const [preview, setPreview] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setPreview(URL.createObjectURL(file));
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <>
      <div className="flex flex-col gap-3">
        <h2>Subir Imagen</h2>
        <div
          {...getRootProps()}
          className="h-full min-h-[150px] max-w-[600px] w-full border-2 border-gray-600 border-dashed grid place-items-center"
        >
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Arrastra el archivo aqui ...</p>
          ) : (
            <p>Arrastra el archivo o haz click aqui</p>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <h3>Imagen</h3>

          {preview ? (
            <img src={preview} alt="Uploaded Image" className="w-[618px] max-w-[100%]"/>
          ) : (
            <img src="/src/assets/imagePreview.png" alt="Image Preview" className="w-[618px] max-w-[100%]" />
          )}
        </div>

        <div className="flex justify-end gap-5">
            <Button radius="none" className="bg-green-600 text-white uppercase">Guardar</Button>
            <Button radius="none" className="uppercase">Cancelar</Button>
        </div>
      </div>
    </>
  );
};

export default DragAndDrop;
