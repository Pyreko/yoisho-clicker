import { get, writable, type Subscriber } from 'svelte/store';
import { dev } from '$app/environment';

export const API_URL_BASE: string = dev ? 'http://localhost:8080' : 'https://api.yoisho.clicker';
