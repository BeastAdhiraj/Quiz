
import React, { useCallback, useEffect, useState } from "react";
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Certificate {
  _id: string;
  name: string;
  certificate: string;
}

export default function OthersCertificates() {
  const [loading, setLoading] = useState(true);
  const [certificates, setCertificates] = useState<Certificate[]>([]);

  const fetchCertificates = useCallback(async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST_LINK}/api/fm`
      );

      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      const result = await response.json();

      if (result.success) {
        setCertificates(result.certificate || []);
      } else {
        throw new Error(
          result.error || "Failed to fetch certificates"
        );
      }
    } catch (error) {
      console.error("Error fetching certificates:", error);
      toast.error("Failed to load certificates.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCertificates();
  }, [fetchCertificates]);

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />

      <section className="min-h-screen bg-black px-4 py-10 text-slate-100 sm:px-6 sm:py-12 lg:px-10">
        <div className="mx-auto w-full max-w-7xl">
          {/* Heading */}
          <h1 className="mb-8 text-center text-2xl font-bold sm:mb-10 sm:text-3xl md:text-4xl">
            Other Certificates
          </h1>

          {/* Loading State */}
          {loading ? (
            <div className="flex h-64 items-center justify-center">
              <p className="text-2xl font-semibold text-white">
                Loading...
              </p>
            </div>
          ) : certificates.length === 0 ? (
            /* Empty State */
            <div className="flex h-64 items-center justify-center">
              <p className="text-lg text-slate-400">
                No certificates found.
              </p>
            </div>
          ) : (
            /* Responsive Certificate Grid */
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
              {certificates.map((certificate) => (
                <div
                  key={certificate._id}
                  className="group overflow-hidden rounded-xl border-2 border-white border-dashed bg-black transition hover:scale-125 "
                >
                  {/* Certificate Image */}
                  <div className="flex h-56 items-center justify-center bg-black border-2 rounded-xl border-white border-dashed p-3 sm:h-60 md:h-64">
                    <img
                      src={certificate.certificate || "/default-certificate.png"}
                      alt={certificate.name || "Certificate"}
                      loading="lazy"
                      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  </div>

                  {/* Certificate Name */}
                  <div className="px-4 py-4 text-center sm:py-5">
                    <h2 className="text-base font-semibold  sm:text-lg bg-amber-500 text-black rounded-lg p-2">
                      {certificate.name}
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
