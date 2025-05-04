import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Checkbox } from "../components/ui/checkbox";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../components/ui/select";

export default function NeuroClearToolkitPage3() {
  console.log("Rendering NeuroClearToolkitPage3 component");

  return (
    <div className="p-4 grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {/* Theme & Visual Preferences */}
      <Card>
        <CardContent>
          <h2 className="text-lg font-semibold mb-2">Theme & Visual Preferences</h2>
          <Select onChange={(value) => console.log(`Theme changed to: ${value}`)}>
            <SelectTrigger>
              <SelectValue placeholder="Choose a theme" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="light">Light</SelectItem>
              <SelectItem value="dark">Dark</SelectItem>
              <SelectItem value="high-contrast">High Contrast</SelectItem>
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      {/* Notification Settings */}
      <Card>
        <CardContent>
          <h2 className="text-lg font-semibold mb-2">Notification Settings</h2>
          <div className="flex items-center space-x-2 mb-2">
            <Checkbox
              id="daily-reminders"
              onChange={() => console.log("Daily reminders toggled")}
            />
            <label htmlFor="daily-reminders">Daily Reminders</label>
          </div>
          <div className="flex items-center space-x-2 mb-2">
            <Checkbox
              id="weekly-summary"
              onChange={() => console.log("Weekly summary toggled")}
            />
            <label htmlFor="weekly-summary">Weekly Summary</label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="task-alerts"
              onChange={() => console.log("Task alerts toggled")}
            />
            <label htmlFor="task-alerts">Task Alerts</label>
          </div>
        </CardContent>
      </Card>

      {/* Integration Config */}
      <Card className="col-span-full">
        <CardContent>
          <h2 className="text-lg font-semibold mb-2">Integration Config</h2>
          <Textarea
            placeholder="Paste API keys, OAuth tokens, or other integration info"
            rows={5}
            onChange={() => console.log("Integration config updated")}
          />
        </CardContent>
      </Card>

      {/* Account Settings */}
      <Card>
        <CardContent>
          <h2 className="text-lg font-semibold mb-2">Account Settings</h2>
          <Input
            placeholder="Update email"
            className="mb-2"
            onChange={() => console.log("Email updated")}
          />
          <Input
            placeholder="Change password"
            type="password"
            className="mb-2"
            onChange={() => console.log("Password changed")}
          />
          <Button onClick={() => console.log("Account updated")}>Update Account</Button>
        </CardContent>
      </Card>

      {/* Data & Privacy */}
      <Card>
        <CardContent>
          <h2 className="text-lg font-semibold mb-2">Data & Privacy</h2>
          <Button variant="outline" onClick={() => console.log("Exporting data")}>
            Export Data
          </Button>
          <Button
            variant="destructive"
            className="mt-2"
            onClick={() => console.log("Deleting all data")}
          >
            Delete All Data
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
