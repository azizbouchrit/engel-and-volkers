import { useState } from "react";
import styles from "./CreateListingModal.module.css";
import { Listing } from "../../../types";
import Button from "../../../design-system/Button";

interface CreateListingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateListingModal({ isOpen, onClose,  }: CreateListingModalProps) {
  const [form, setForm] = useState<Omit<Listing, "id">>({
    image: "",
    title: "",
    description: "",
    type: "apartment",
    rooms: 1,
    bathrooms: 1,
    floor: 1,
    plotSize: null,
    price: 0,
    agent: "",
    shop: "",
  });

  if (!isOpen) return null;

  const handleChange = (key: keyof Omit<Listing, "id">, value: any) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
      // enforce floor vs plotSize rule
      ...(key === "type"
        ? value === "apartment"
          ? { floor: 1, plotSize: null }
          : { floor: null, plotSize: 1 }
        : {}),
    }));
  };

  const onCreate = (data: Omit<Listing, "id">) => {
    // Placeholder for create logic
    console.log("Creating listing:", data);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onCreate(form);
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Create Listing</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Image URL:
            <input
              type="text"
              value={form.image}
              onChange={(e) => handleChange("image", e.target.value)}
              required
            />
          </label>

          <label>
            Title:
            <input
              type="text"
              value={form.title}
              onChange={(e) => handleChange("title", e.target.value)}
              required
            />
          </label>

          <label>
            Description:
            <textarea
              value={form.description}
              onChange={(e) => handleChange("description", e.target.value)}
              required
            />
          </label>

          <label>
            Type:
            <select
              value={form.type}
              onChange={(e) => handleChange("type", e.target.value as "apartment" | "house")}
            >
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
            </select>
          </label>

          <label>
            Rooms:
            <input
              type="number"
              min={1}
              value={form.rooms}
              onChange={(e) => handleChange("rooms", Number(e.target.value))}
              required
            />
          </label>

          <label>
            Bathrooms:
            <input
              type="number"
              min={1}
              value={form.bathrooms}
              onChange={(e) => handleChange("bathrooms", Number(e.target.value))}
              required
            />
          </label>

          {form.type === "apartment" ? (
            <label>
              Floor:
              <input
                type="number"
                min={0}
                value={form.floor ?? 1}
                onChange={(e) => handleChange("floor", Number(e.target.value))}
                required
              />
            </label>
          ) : (
            <label>
              Plot Size (m²):
              <input
                type="number"
                min={1}
                value={form.plotSize ?? 1}
                onChange={(e) => handleChange("plotSize", Number(e.target.value))}
                required
              />
            </label>
          )}

          <label>
            Price:
            <input
              type="number"
              min={0}
              value={form.price}
              onChange={(e) => handleChange("price", Number(e.target.value))}
              required
            />
          </label>

          <label>
            Agent Email:
            <input
              type="email"
              value={form.agent}
              onChange={(e) => handleChange("agent", e.target.value)}
              required
            />
          </label>

          <label>
            Shop:
            <input
              type="text"
              value={form.shop}
              onChange={(e) => handleChange("shop", e.target.value)}
              required
            />
          </label>

          <div className={styles.actions}>
            <Button type="button" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Create</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
