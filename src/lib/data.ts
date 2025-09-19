import "server-only";
import { prisma } from "./prisma";
import { unstable_noStore as noStore } from "next/cache";
import { Project, Profile, Technology } from "~/generated/prisma";

export type ProjectWithTechnologies = Project & {
  technologies: Technology[];
};

export async function getProfileData(): Promise<Partial<Profile>> {
  noStore();
  try {
    const profile = await prisma.profile.findFirst({
      cacheStrategy: { ttl: 60, swr: 30 },
    });
    if (!profile) throw new Error("Profile data not found.");
    return profile;
  } catch (error) {
    console.error("Database Error: Failed to fetch profile data.", error);
    return {
      name: "Nama Tidak Ditemukan",
      position: "Posisi Tidak Ditemukan",
      bio: "Bio tidak tersedia.",
      avatarUrl: "",
      description: "",
      email: "",
      github: "",
      linkedin: "",
      instagram: "",
      cvLatestUrl: "",
      cvOldUrl: "",
    };
  }
}

export async function getActiveTechnologies() {
  noStore();
  try {
    return await prisma.technology.findMany({
      where: { isActive: true },
      orderBy: { name: "asc" },
    });
  } catch (error) {
    console.error("Database Error: Failed to fetch technologies.", error);
    return [];
  }
}

export async function getAllProjects(): Promise<ProjectWithTechnologies[]> {
  noStore();
  try {
    const projects = await prisma.project.findMany({
      include: {
        technologies: true,
      },
      orderBy: [{ featured: "desc" }, { title: "asc" }],
    });

    return projects as ProjectWithTechnologies[];
  } catch (error) {
    console.error("Database Error: Failed to fetch all projects.", error);
    return [];
  }
}

export async function getFeaturedProjects(): Promise<
  ProjectWithTechnologies[]
> {
  noStore();
  try {
    const projects = await prisma.project.findMany({
      where: { featured: true },
      include: {
        technologies: true,
      },
    });
    return projects as ProjectWithTechnologies[];
  } catch (error) {
    console.error("Database Error: Failed to fetch featured projects.", error);
    return [];
  }
}

export async function getProjectBySlug(
  slug: string
): Promise<ProjectWithTechnologies | null> {
  noStore();
  try {
    const project = await prisma.project.findUnique({
      where: { slug },
      include: {
        technologies: true,
      },
    });
    return project as ProjectWithTechnologies | null;
  } catch (error) {
    console.error(
      `Database Error: Failed to fetch project with slug "${slug}".`,
      error
    );
    return null;
  }
}

export async function getExperiences() {
  noStore();
  try {
    return await prisma.experience.findMany({ orderBy: { startDate: "desc" } });
  } catch (error) {
    console.error("Database Error: Failed to fetch experiences.", error);
    return [];
  }
}

export async function getEducations() {
  noStore();
  try {
    return await prisma.education.findMany({ orderBy: { startDate: "desc" } });
  } catch (error) {
    console.error("Database Error: Failed to fetch educations.", error);
    return [];
  }
}

export async function getCertifications() {
  noStore();
  try {
    return await prisma.certification.findMany({
      orderBy: { issueDate: "desc" },
    });
  } catch (error) {
    console.error("Database Error: Failed to fetch certifications.", error);
    return [];
  }
}
