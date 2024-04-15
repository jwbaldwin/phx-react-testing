import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import React from "react";

const supabase = createClient(
  "https://ninclkmjvakhkdhgvymt.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pbmNsa21qdmFraGtkaGd2eW10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI3NzIwNjYsImV4cCI6MjAyODM0ODA2Nn0.prEecDHIs1MABWkApOAWZa3EoQGSKd9s25oxeu8qAjo",
);

export default function Login() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
  } else {
    return <div>Logged in!</div>;
  }
}
