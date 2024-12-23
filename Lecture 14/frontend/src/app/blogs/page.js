"use client";

import useSWR, { mutate } from "swr";
import Card from "../../components/custom/Card";
import { Button } from "@/components/ui/button";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Blogs() {
  const url = "http://localhost:3003/blog";
  const { data: blogs, error, isLoading } = useSWR(url, fetcher);

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentBlogId, setCurrentBlogId] = useState(null);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");

  const handleAddClick = () => {
    setIsEditMode(false);
    setNewTitle("");    
    setNewDescription("");
    setIsDialogOpen(true);
  };

  const handleEditClick = (blog) => {
    setIsEditMode(true);
    setCurrentBlogId(blog.id);
    setNewTitle(blog.title);
    setNewDescription(blog.description);
    setIsDialogOpen(true);
  };

  const handleDeleteClick = (blogId) => {
    setCurrentBlogId(blogId);
    setIsDeleteDialogOpen(true);
  };

  const handleAddBlog = async () => {
    const newBlog = { title: newTitle, description: newDescription };

    try {
      await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newBlog),
      });
      mutate(url); // Refresh data after adding
      toast.success("Blog added successfully!");
    } catch (error) {
      toast.error("Failed to add blog.");
    } finally {
      setIsDialogOpen(false);
    }
  };

  const handleUpdateBlog = async () => {
    const updatedBlog = { title: newTitle, description: newDescription };

    try {
      await fetch(`${url}/${currentBlogId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedBlog),
      });
      mutate(url); // Refresh data after updating
      toast.success("Blog updated successfully!");
    } catch (error) {
      toast.error("Failed to update blog.");
    } finally {
      setIsDialogOpen(false);
    }
  };

  const handleDeleteBlog = async () => {
    try {
      await fetch(`${url}/${currentBlogId}`, {
        method: "DELETE",
      });
      mutate(url); // Refresh data after deletion
      toast.success("Blog deleted successfully!");
    } catch (error) {
      toast.error("Failed to delete blog.");
    } finally {
      setIsDeleteDialogOpen(false);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading blogs.</div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-300 to-orange-200 p-6">
      <ToastContainer />
      <Button onClick={handleAddClick} className="mb-6">
        Add Blog
      </Button>

      {/* Add/Edit Blog Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{isEditMode ? "Edit Blog" : "Add New Blog"}</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Input
              placeholder="Title"
              value={newTitle}
              onChange={(e) => setNewTitle(e.target.value)}
              className="w-full"
            />
            <Input
              placeholder="Description"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className="w-full"
            />
          </div>
          <DialogFooter>
            <Button onClick={() => setIsDialogOpen(false)}>Cancel</Button>
            <Button onClick={isEditMode ? handleUpdateBlog : handleAddBlog}>
              {isEditMode ? "Update Blog" : "Add Blog"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Confirm Delete</DialogTitle>
          </DialogHeader>
          <p>Are you sure you want to delete this blog?</p>
          <DialogFooter>
            <Button onClick={() => setIsDeleteDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleDeleteBlog} className="bg-red-500 text-white">
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Blog List */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {blogs?.map((blog) => (
          <Card
            key={blog.id}
            title={blog.title}
            description={blog.description}
            onEdit={() => handleEditClick(blog)}
            onDelete={() => handleDeleteClick(blog.id)}
          />
        ))}
      </div>
    </div>
  );
}
