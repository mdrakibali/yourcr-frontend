export function getDefaultDashboardRoute(role: string): string {
  switch (role.toLowerCase()) {
    case "admin":
      return "/admin/dashboard";
    case "cr":
      return "/cr/dashboard";
    case "student":
    default:
      return "/student/dashboard";
  }
}

