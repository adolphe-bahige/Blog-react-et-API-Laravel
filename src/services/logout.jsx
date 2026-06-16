import { logout } from "./auth";

export const handleLogout = async () => {
  if (!window.confirm("Se deconnecter ?")) return;

  try {
    await logout();
  } finally {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }
};
