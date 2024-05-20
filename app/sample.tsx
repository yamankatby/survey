"use client";

import { InfoCircledIcon } from "@radix-ui/react-icons";
import * as Popover from "@radix-ui/react-popover";
import React, { useCallback, useMemo, useState } from "react";
import "tailwindcss/tailwind.css";

const InfoPopover: React.FC<{ content: string }> = ({ content }) => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <button className="ml-2 text-gray-500">
        <InfoCircledIcon />
      </button>
    </Popover.Trigger>
    <Popover.Content className="bg-white p-2 shadow-md rounded-md text-sm max-w-xs border">
      {content}
      <Popover.Arrow className="fill-current text-black" />
    </Popover.Content>
  </Popover.Root>
);

const SampleSizeCalculator: React.FC = () => {
  const [confidenceLevel, setConfidenceLevel] = useState(1.96);
  const [marginOfError, setMarginOfError] = useState(5);
  const [populationSize, setPopulationSize] = useState<number | undefined>(
    undefined
  );
  const [proportion, setProportion] = useState(0.5);

  const handleConfidenceLevelChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) =>
      setConfidenceLevel(Number(e.target.value)),
    []
  );

  const handleMarginOfErrorChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setMarginOfError(Number(e.target.value)),
    []
  );

  const handlePopulationSizeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setPopulationSize(Number(e.target.value) || undefined),
    []
  );

  const handleProportionChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setProportion(Number(e.target.value)),
    []
  );

  const sampleSize = useMemo(() => {
    const Z = confidenceLevel;
    const E = marginOfError / 100;
    const n = (Math.pow(Z, 2) * proportion * (1 - proportion)) / Math.pow(E, 2);

    if (populationSize === undefined) {
      return Math.ceil(n);
    } else {
      const n_prime = n / (1 + (n - 1) / populationSize);
      return Math.ceil(n_prime);
    }
  }, [confidenceLevel, marginOfError, populationSize, proportion]);

  return (
    <div className="flex flex-col gap-2">
      <label className="flex items-center gap-2">
        <span className="w-56">Güven Seviyesi (%):</span>
        <select
          value={confidenceLevel}
          onChange={handleConfidenceLevelChange}
          className="flex-1 border"
        >
          <option value={1.04}>70%</option>
          <option value={1.15}>75%</option>
          <option value={1.28}>80%</option>
          <option value={1.44}>85%</option>
          <option value={1.645}>90%</option>
          <option value={1.96}>95%</option>
          <option value={2.05}>98%</option>
          <option value={2.576}>99%</option>
          <option value={3.29}>99.9%</option>
          <option value={3.891}>99.99%</option>
          <option value={4.417}>99.999%</option>
        </select>
        <InfoPopover content="Güven seviyesi, sonuçların güvenilirliğini ifade eder. Yüksek güven seviyeleri, daha fazla örneklem gerektirir." />
      </label>
      <label className="flex items-center gap-4">
        <span className="w-56">Hata Payı (%):</span>
        <div className="flex items-center gap-2 flex-1">
          <input
            type="range"
            min="1"
            max="10"
            step="0.1"
            value={marginOfError}
            onChange={handleMarginOfErrorChange}
            className="flex-1"
          />
          <input
            type="number"
            min="1"
            max="10"
            step="0.1"
            value={marginOfError}
            onChange={handleMarginOfErrorChange}
            className="w-16 border p-1"
          />
          <span>%</span>
        </div>
        <InfoPopover content="Hata payı, örneklem istatistiği ile popülasyon parametresi arasındaki kabul edilebilir maksimum farktır." />
      </label>
      <label className="flex items-center gap-4">
        <span className="w-56">Oran (0-1):</span>
        <div className="flex items-center gap-2 flex-1">
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={proportion}
            onChange={handleProportionChange}
            className="flex-1"
          />
          <input
            type="number"
            min="0"
            max="1"
            step="0.01"
            value={proportion}
            onChange={handleProportionChange}
            className="w-16 border p-1"
          />
        </div>
        <InfoPopover content="Oran, popülasyonun tahmini oranıdır. Bilinmiyorsa 0.5 kullanılır." />
      </label>
      <label className="flex items-center gap-4">
        <span className="w-56">Popülasyon Büyüklüğü:</span>
        <input
          type="number"
          value={populationSize || ""}
          onChange={handlePopulationSizeChange}
          className="flex-1 border"
        />
        <InfoPopover content="Popülasyon büyüklüğü, örneklemin çekileceği toplam birim sayısını ifade eder." />
      </label>
      <h3 className="flex items-center gap-4">
        <span className="w-56">Hesaplanan Örneklem Hacmi: </span>
        <span className="text-xl font-bold">{sampleSize.toLocaleString()}</span>
      </h3>
    </div>
  );
};

export default SampleSizeCalculator;
