import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { blogApi, IMAGE_BASE_URL } from "../utils/api";
import { Loader2, ArrowLeft, Calendar, Tag } from "lucide-react";
import "./BlogDetail.css";

const BlogDetail = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await blogApi.getById(id);
                if (response.data?.success && response.data?.data) {
                    const b = response.data.data;
                    setBlog({
                        id: b._id,
                        category: b.category || "Industry Insights",
                        title: b.title,
                        content: b.content || "",
                        img: b.thumbnail ? (b.thumbnail.replace(/\\/g, '/')?.startsWith("http") ? b.thumbnail : `${IMAGE_BASE_URL}/${b.thumbnail.replace(/\\/g, '/')}`) : "",
                        date: new Date(b.date || b.createdAt).toLocaleDateString("en-US", {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                        }),
                    });
                }
            } catch (error) {
                console.error("Failed to fetch blog detail:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
        window.scrollTo(0, 0);
    }, [id]);

    if (loading) {
        return (
            <div className="flex-c-m flex-col w-full" style={{ height: "100vh" }}>
                <Loader2 className="animate-spin text-[#717fe0]" size={50} />
                <p className="p-t-20 stext-101 cl6">Loading Blog Content...</p>
            </div>
        );
    }

    if (!blog) {
        return (
            <div className="flex-c-m flex-col w-full" style={{ height: "100vh" }}>
                <h3 className="stext-101 cl2">Blog not found</h3>
                <Link to="/blog" className="m-t-20 back-to-blogs">
                    <ArrowLeft size={18} /> Back to Blogs
                </Link>
            </div>
        );
    }

    return (
        <section className="blog-detail-section p-t-100 p-b-100">
            <style>
                {`
                    .blog-detail-content,
                    .blog-detail-content * {
                        max-width: 100% !important;
                        overflow-wrap: break-word !important;
                        word-wrap: break-word !important;
                        word-break: normal !important;
                        white-space: pre-wrap !important;
                        hyphens: none !important;
                    }
                    .blog-detail-content ul, 
                    .blog-detail-content ol {
                        padding-left: 1.5em !important;
                        margin-bottom: 15px !important;
                    }
                    .blog-detail-content li {
                        list-style-type: none !important;
                        padding-left: 1.5em !important;
                        position: relative !important;
                        margin-bottom: 8px !important;
                        line-height: 1.8 !important;
                    }
                    .blog-detail-content li::before {
                        display: inline-block !important;
                        margin-left: -1.5em !important;
                        margin-right: 0.3em !important;
                        text-align: right !important;
                        white-space: nowrap !important;
                        width: 1.2em !important;
                        font-weight: normal !important;
                    }
                    .blog-detail-content li[data-list=bullet]::before {
                        content: '\\2022' !important;
                        font-size: 1.2em !important;
                        line-height: 1 !important;
                        color: #333 !important;
                    }
                    .blog-detail-content li[data-list=checked]::before {
                        content: '\\2611' !important;
                        color: #717fe0 !important;
                    }
                    .blog-detail-content li[data-list=unchecked]::before {
                        content: '\\2610' !important;
                        color: #777 !important;
                    }
                    .blog-detail-content li[data-list=ordered] {
                        counter-increment: list-0;
                    }
                    .blog-detail-content li[data-list=ordered]::before {
                        content: counter(list-0, decimal) '. ' !important;
                    }
                    .blog-detail-content .ql-indent-1:not(.ql-direction-rtl) { padding-left: 3em !important; }
                    .blog-detail-content li.ql-indent-1:not(.ql-direction-rtl) { padding-left: 4.5em !important; }
                    .blog-detail-content .ql-indent-2:not(.ql-direction-rtl) { padding-left: 6em !important; }
                    .blog-detail-content li.ql-indent-2:not(.ql-direction-rtl) { padding-left: 7.5em !important; }
                    .blog-detail-content .ql-indent-3:not(.ql-direction-rtl) { padding-left: 9em !important; }
                    .blog-detail-content li.ql-indent-3:not(.ql-direction-rtl) { padding-left: 10.5em !important; }
                `}
            </style>
            <div className="container">
                <Link to="/blog" className="back-to-blogs">
                    <ArrowLeft size={18} /> Back to Insights
                </Link>

                <div className="blog-detail-container">
                    <header className="blog-detail-header">
                        {blog.category && <span className="blog-detail-category">{blog.category}</span>}
                        <h1 className="blog-detail-title">{blog.title}</h1>
                        <div className="blog-detail-meta">
                            <span><Calendar size={18} /> {blog.date}</span>
                            {blog.category && <span><Tag size={18} /> {blog.category}</span>}
                        </div>
                    </header>

                    {blog.img && (
                        <div className="blog-detail-image-wrapper">
                            <img src={blog.img} alt={blog.title} className="blog-detail-image" />
                        </div>
                    )}

                    <div
                        className="blog-detail-content ql-editor"
                        dangerouslySetInnerHTML={{
                            __html: blog.content
                                ? blog.content
                                    .replace(/&amp;nbsp;/gi, " ")
                                    .replace(/&nbsp;/gi, " ")
                                    .replace(/\u00a0/g, " ")
                                    .replace(/word-break\s*:\s*break-all/gi, "word-break: normal")
                                    .replace(/white-space\s*:\s*nowrap/gi, "white-space: pre-wrap")
                                : ""
                        }}
                    />
                </div>
            </div>
        </section>
    );
};

export default BlogDetail;
