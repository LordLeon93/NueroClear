import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Checkbox } from "../components/ui/checkbox";

export default function NeuroClearToolkitPage1() {
  console.log("Rendering NeuroClearToolkitPage1 component");

  return (
    <div className="p-4 grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {/* Work Log */}
      <Card>
        <CardContent>
          <h2 className="text-lg font-semibold mb-2">Work Log</h2>
          <Textarea
            placeholder="Log your daily tasks"
            rows={6}
            onChange={() => console.log("Work Log updated")}
          />
        </CardContent>
      </Card>

      {/* Daily Dashboard */}
      <Card>
        <CardContent>
          <h2 className="text-lg font-semibold mb-2">Daily Dashboard</h2>
          <Input
            placeholder="Set your focus for the day"
            className="mb-2"
            onChange={() => console.log("Daily Dashboard focus updated")}
          />
          <Textarea
            placeholder="Tasks and priorities"
            rows={4}
            onChange={() => console.log("Daily Dashboard tasks updated")}
          />
        </CardContent>
      </Card>

      {/* Email Tracker */}
      <Card>
        <CardContent>
          <h2 className="text-lg font-semibold mb-2">Email Tracker</h2>
          <Textarea
            placeholder="Emails that require follow-up"
            rows={4}
            onChange={() => console.log("Email Tracker updated")}
          />
          <Button onClick={() => console.log("Fetching emails...")}>Fetch Email</Button>
        </CardContent>
      </Card>

      {/* Priority Sorter */}
      <Card>
        <CardContent>
          <h2 className="text-lg font-semibold mb-2">Priority Sorter</h2>
          <Textarea
            placeholder="Sort tasks by priority"
            rows={4}
            onChange={() => console.log("Priority Sorter updated")}
          />
        </CardContent>
      </Card>
    </div>
  );
}
