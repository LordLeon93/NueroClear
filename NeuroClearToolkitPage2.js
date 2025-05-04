import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Textarea } from "../components/ui/textarea";
import { Input } from "../components/ui/input";

export default function NeuroClearToolkitPage2() {
  console.log("Rendering NeuroClearToolkitPage2 component");

  return (
    <div className="p-4 grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {/* Weekly Reflection */}
      <Card>
        <CardContent>
          <h2 className="text-lg font-semibold mb-2">Weekly Reflection</h2>
          <Textarea
            placeholder="What went well this week? What could improve?"
            rows={6}
            onChange={() => console.log("Weekly Reflection updated")}
          />
        </CardContent>
      </Card>

      {/* Wins Tracker */}
      <Card>
        <CardContent>
          <h2 className="text-lg font-semibold mb-2">Wins Tracker</h2>
          <Textarea
            placeholder="Record your accomplishments"
            rows={4}
            onChange={() => console.log("Wins Tracker updated")}
          />
        </CardContent>
      </Card>

      {/* Mood Tracker */}
      <Card>
        <CardContent>
          <h2 className="text-lg font-semibold mb-2">Mood Tracker</h2>
          <Input
            placeholder="Mood (e.g., 1-10 or keywords like calm, anxious)"
            className="mb-2"
            onChange={() => console.log("Mood Tracker updated")}
          />
          <Textarea
            placeholder="Context or notes on mood"
            rows={3}
            onChange={() => console.log("Mood Tracker context updated")}
          />
        </CardContent>
      </Card>

      {/* Journal Archive */}
      <Card className="col-span-full">
        <CardContent>
          <h2 className="text-lg font-semibold mb-2">Journal Archive</h2>
          <Textarea
            placeholder="Paste or summarize journal entries to revisit"
            rows={6}
            onChange={() => console.log("Journal Archive updated")}
          />
        </CardContent>
      </Card>

      {/* Thought Garden */}
      <Card>
        <CardContent>
          <h2 className="text-lg font-semibold mb-2">Thought Garden</h2>
          <Textarea
            placeholder="Ideas, insights, or free writing"
            rows={6}
            onChange={() => console.log("Thought Garden updated")}
          />
        </CardContent>
      </Card>

      {/* Reflection Prompts */}
      <Card>
        <CardContent>
          <h2 className="text-lg font-semibold mb-2">Reflection Prompts</h2>
          <Textarea
            placeholder="What's something you learned about yourself this week?"
            rows={4}
            onChange={() => console.log("Reflection Prompts updated")}
          />
        </CardContent>
      </Card>
    </div>
  );
}
