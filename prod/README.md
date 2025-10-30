# 🚀 Deployment Guide — Forkits Website (Production)

Dokumentasi ini menjelaskan langkah-langkah untuk membangun image Docker, mendorongnya ke registry (Docker Hub), serta melakukan deployment ke **Kubernetes (K3s)** single node cluster.

---

![topology](topology.jpg)

---

## 🧱 Build Image

Langkah ini digunakan untuk membangun image dari source code aplikasi.
1. Clone repository
```
git clone https://github.com/destiaeka/forkits-website.git
cd forkits-website
```
2. Build image Docker
```docker build -t destiaeka/forkits-web . ```
3. Verifikasi image sudah terbuat
```docker image ls```
> 💡 Tips: Pastikan kamu berada di direktori yang berisi file Dockerfile sebelum menjalankan perintah build.

## ☁️ Push Image ke Registry
Setelah image berhasil dibuat, kita perlu mendorongnya ke Docker Hub agar bisa digunakan oleh Kubernetes untuk melakukan pull image saat deploy.
```docker push destiaeka/forkits-web```
⚠️ Jika kamu belum login ke Docker Hub, jalankan terlebih dahulu:
``` docker login ```

## ⚙️ Instalasi K3s (Single Node Cluster)

Di sini digunakan K3s single cluster karena ringan dan cocok untuk kebutuhan development maupun staging.
1. Install K3s
```curl -sfL https://get.k3s.io | sh -```
2. Konfigurasi Kubeconfig untuk Non-root User
Agar user biasa bisa menjalankan kubectl, lakukan konfigurasi berikut:
```
mkdir -p $HOME/.kube
sudo cp /etc/rancher/k3s/k3s.yaml $HOME/.kube/config
sudo chown $(id -u):$(id -g) $HOME/.kube/config
```
3. Verifikasi Cluster Berjalan
```
kubectl get nodes
kubectl get pods -A
```
> ✅ Jika status node Ready, berarti K3s sudah berhasil dijalankan

## 🚀 Deploy Aplikasi ke Kubernetes
File manifest untuk deploy bernama forkits-deployment.yml.
File ini berisi 3 resource utama:
- Deployment — mendefinisikan container dan jumlah replica.
- Service (NodePort) — untuk expose aplikasi ke luar cluster.
- Horizontal Pod Autoscaler (HPA) — untuk auto-scale pod berdasarkan penggunaan CPU.

1. Apply Manifest
Masuk ke direktori produksi dan apply konfigurasi:
```
cd forkits-website/production
kubectl apply -f forkits-deployment.yml
```
2. Verifikasi Resource
Cek apakah deployment, service, dan HPA sudah berjalan:
```kubectl get all```
Kamu akan melihat minimal 2 pod aktif (hasil scaling dari HPA).

## Untuk mengakses web dari browser:

Cek IP node:
```kubectl get nodes -o wide```

Cek NodePort yang digunakan oleh service (lihat di kolom PORT(S)):
```kubectl get svc```

Akses di browser
```<ip node>:<ip port>```

# ✅ Result
![result1](result1.jpeg)
![result2](result2.jpg)