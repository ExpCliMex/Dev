import React from "react";
import { useTranslation } from "react-i18next";

function Label({ children, htmlFor, className = "form-label" }) {
    const { t } = useTranslation();
    return (
        <label htmlFor={htmlFor} className={className + " me-3"}>
            {t(htmlFor)}
        </label>
    );
}

export { Label };
