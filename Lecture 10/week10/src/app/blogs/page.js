"use client";

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

export default function Blogs() {
  const [blogs, setBlogs] = useState([
    { id: 1, title: "First Blog", description: "This is the first blog." },
    { id: 2, title: "Second Blog", description: "This is the second blog." },
    { id: 3, title: "Third Blog", description: "This is the third blog." },
  ]);

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

  const handleAddBlog = () => {
    const newBlog = { id: blogs.length + 1, title: newTitle, description: newDescription };
    setBlogs([...blogs, newBlog]);
    toast.success("Blog added successfully!");
    setIsDialogOpen(false);
  };

  const handleUpdateBlog = () => {
    setBlogs(
      blogs.map((blog) =>
        blog.id === currentBlogId ? { ...blog, title: newTitle, description: newDescription } : blog
      )
    );
    toast.success("Blog updated successfully!");
    setIsDialogOpen(false);
  };

  const handleDeleteBlog = () => {
    setBlogs(blogs.filter((blog) => blog.id !== currentBlogId));
    toast.success("Blog deleted successfully!");
    setIsDeleteDialogOpen(false);
  };

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
            <Button variant="destructive" onClick={isEditMode ? handleUpdateBlog : handleAddBlog}>
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
            <Button variant="destructive" onClick={handleDeleteBlog} className="bg-red-500 text-white">
              Delete
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Blog List */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {blogs.map((blog) => (
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
