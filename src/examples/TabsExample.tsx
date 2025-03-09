import React from 'react';
import { Button } from "@/components/ui/Button/button";
import { Label } from "@/components/ui/Label";
import { Input } from "@/components/ui/Input";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/Tabs";

// Basic Tabs example - refined styling for professional look
export function TabsDemo() {
  return (
    <Tabs defaultValue="account" className="w-100" style={{ maxWidth: "500px" }}>
      <TabsList>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      
      <TabsContent value="account">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Account</h5>
            <p className="card-subtitle">
              Make changes to your account here. Click save when you're done.
            </p>
          </div>
          <div className="card-body">
            <div className="mb-4">
              <Label htmlFor="name">Name</Label>
              <Input id="name" defaultValue="Pedro Duarte" className="mt-2" />
            </div>
            <div className="mb-4">
              <Label htmlFor="username">Username</Label>
              <Input id="username" defaultValue="@peduarte" className="mt-2" />
            </div>
          </div>
          <div className="card-footer">
            <Button>Save changes</Button>
          </div>
        </div>
      </TabsContent>
      
      <TabsContent value="password">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Password</h5>
            <p className="card-subtitle">
              Change your password here. After saving, you'll be logged out.
            </p>
          </div>
          <div className="card-body">
            <div className="mb-4">
              <Label htmlFor="current">Current password</Label>
              <Input id="current" type="password" className="mt-2" />
            </div>
            <div className="mb-4">
              <Label htmlFor="new">New password</Label>
              <Input id="new" type="password" className="mt-2" />
            </div>
          </div>
          <div className="card-footer">
            <Button>Save password</Button>
          </div>
        </div>
      </TabsContent>
    </Tabs>
  );
}

// Example with more tabs and vertical layout
export function VerticalTabs() {
  return (
    <Tabs defaultValue="profile" className="tabs-vertical w-100">
      <TabsList className="border-end">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="security">Security</TabsTrigger>
        <TabsTrigger value="notifications">Notifications</TabsTrigger>
      </TabsList>
      
      <div className="flex-1">
        <TabsContent value="profile" className="p-3 border rounded">
          <h4>Profile Settings</h4>
          <p>Manage your profile information.</p>
        </TabsContent>
        <TabsContent value="account" className="p-3 border rounded">
          <h4>Account Settings</h4>
          <p>Manage your account preferences.</p>
        </TabsContent>
        <TabsContent value="security" className="p-3 border rounded">
          <h4>Security Settings</h4>
          <p>Manage your security options and devices.</p>
        </TabsContent>
        <TabsContent value="notifications" className="p-3 border rounded">
          <h4>Notification Settings</h4>
          <p>Manage how you receive notifications.</p>
        </TabsContent>
      </div>
    </Tabs>
  );
}

// Example with disabled tab - improved styling
export function TabsWithDisabled() {
  return (
    <Tabs defaultValue="active" className="w-100">
      <TabsList>
        <TabsTrigger value="active">Active</TabsTrigger>
        <TabsTrigger value="inactive">Inactive</TabsTrigger>
        <TabsTrigger value="disabled" disabled>
          Disabled
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="active" className="p-3 border rounded mt-3">
        <p>This is the active tab content.</p>
      </TabsContent>
      <TabsContent value="inactive" className="p-3 border rounded mt-3">
        <p>This is the inactive tab content.</p>
      </TabsContent>
      <TabsContent value="disabled" className="p-3 border rounded mt-3">
        <p>This content should not be accessible.</p>
      </TabsContent>
    </Tabs>
  );
}

// Bootstrap Card-Style Tabs
export function CardStyleTabs() {
  return (
    <Tabs defaultValue="home" className="w-100">
      <div className="card">
        <div className="card-header p-0 bg-transparent">
          <TabsList className="border-0 bg-transparent p-0">
            <TabsTrigger 
              value="home" 
              className="border-0 rounded-0 rounded-top border-top border-start border-end"
            >
              Home
            </TabsTrigger>
            <TabsTrigger 
              value="profile" 
              className="border-0 rounded-0 rounded-top border-top border-start border-end"
            >
              Profile
            </TabsTrigger>
            <TabsTrigger 
              value="contact" 
              className="border-0 rounded-0 rounded-top border-top border-start border-end"
            >
              Contact
            </TabsTrigger>
          </TabsList>
        </div>
        
        <div className="card-body">
          <TabsContent value="home">
            <h5 className="mb-3">Home Tab Content</h5>
            <p>This is some content for the home tab panel.</p>
          </TabsContent>
          <TabsContent value="profile">
            <h5 className="mb-3">Profile Tab Content</h5>
            <p>This is some content for the profile tab panel.</p>
          </TabsContent>
          <TabsContent value="contact">
            <h5 className="mb-3">Contact Tab Content</h5>
            <p>This is some content for the contact tab panel.</p>
          </TabsContent>
        </div>
      </div>
    </Tabs>
  );
}