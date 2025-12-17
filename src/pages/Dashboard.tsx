import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plus, LogOut, Settings } from "lucide-react";
import Footer from "@/components/layout/Footer";

const Dashboard = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Dashboard Header */}
      <header className="border-b border-border bg-card">
        <div className="container flex h-16 items-center justify-between">
          <Link to="/" className="text-xl font-bold text-foreground">
            RootKnow
          </Link>
          <nav className="flex items-center gap-6">
            <Link 
              to="/dashboard" 
              className="text-sm font-medium text-foreground"
            >
              Dashboard
            </Link>
            <Link 
              to="#" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <Settings className="w-4 h-4 inline mr-1" />
              Settings
            </Link>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/app">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Link>
            </Button>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-8">
        <div className="container">
          {/* Welcome */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-foreground mb-2">
              Welcome back, User
            </h1>
            <p className="text-muted-foreground">
              Manage your projects and workflows.
            </p>
          </div>

          {/* Create Project Button */}
          <div className="mb-8">
            <Button>
              <Plus className="w-4 h-4 mr-2" />
              Create New Project
            </Button>
          </div>

          {/* Projects Table */}
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="p-6 border-b border-border">
              <h2 className="text-xl font-semibold text-foreground">Your Projects</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">
                      Project Name
                    </th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">
                      Created
                    </th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">
                      Status
                    </th>
                    <th className="text-left text-sm font-medium text-muted-foreground px-6 py-4">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-muted-foreground">
                      No active projects found.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
